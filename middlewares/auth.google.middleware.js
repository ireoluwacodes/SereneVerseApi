const passport = require("passport");
const { User } = require("../models/user.model");
const {
  googleClientId,
  googleClientSecret,
} = require("../config/constants.config");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let user = await User.findOne({ email: profile.emails[0].value });
        let dp = "";
        if (profile.photos.length > 0) dp = profile.photos[0].value;
        if (!user) {
          user = await User.create({
            fullName: `${profile.displayName}`,
            email: profile.emails[0].value,
            loginScheme: "google",
            displayImage: dp,
            role: 2,
          });
        } else {
          if (user.loginScheme !== "google")
            throw new Error(
              `Invalid login scheme - login with ${user.loginScheme}`
            );
        }
        if (!user) throw new ForbiddenRequestError("An Error occurred");
        return cb(null, user);
      } catch (error) {
        return cb(error, false);
      }
    }
  )
);

module.exports = passport;
