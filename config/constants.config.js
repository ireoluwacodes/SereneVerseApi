require("dotenv").config();

const PORT = process.env.PORT || "3000";
const localMUrl = process.env.LOCAL_MONGO_URL;
const webMUrl = process.env.MONGO_URL;
const secret = process.env.JWT_KEY;
const nodeEnv = process.env.NODE_ENV;
const mailHost = process.env.MAIL_HOST;
const mailPass = process.env.PASS;
const mailUser = process.env.USER;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;
const cloudinaryName = process.env.CLOUDINARY_CLOUD_NAME;

module.exports = {
  PORT,
  localMUrl,
  webMUrl,
  secret,
  nodeEnv,
  mailHost,
  mailUser,
  mailPass,
  cloudinaryApiKey,
  cloudinaryApiSecret,
  cloudinaryName,
};
