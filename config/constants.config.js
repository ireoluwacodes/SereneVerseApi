require("dotenv").config();

const PORT = process.env.PORT || "3000";
const localMUrl = process.env.LOCAL_MONGO_URL;
const webMUrl = process.env.MONGO_URL;
const secret = process.env.JWT_KEY;
const nodeEnv = process.env.NODE_ENV;
const mailHost = process.env.MAIL_HOST;
const mailPass = process.env.PASS;
const mailUser = process.env.USER;

module.exports = {
  PORT,
  localMUrl,
  webMUrl,
  secret,
  nodeEnv,
  mailHost,
  mailUser,
  mailPass
};
