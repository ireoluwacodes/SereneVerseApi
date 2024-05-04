const passport = require("passport");
const { User } = require("../models/user.model");
const { googleClientId, googleClientSecret } = require("../config/constants.config");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback : true
    },
    async function (request, accessToken, refreshToken, profile, cb){
      console.log(profile);
      try {
        let user = await User.findOne({ email: profile.emails[0].value});
        if (!user) {
          user = await User.create({
            fullName: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.email[0].value,
            loginScheme : "google",
            role : 2,
          });
        } else {
            if(user.loginScheme !== "google") throw new Error(`Invalid login scheme - login with ${user.loginScheme}`)
        }
        if(!user) throw new ForbiddenRequestError("An Error occurred")
        request.user = user;
        return cb(null, user);
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);