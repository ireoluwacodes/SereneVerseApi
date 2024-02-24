const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const { mailHost, mailPass, mailUser } = require("./constants.config");
const { hbsOptions } = require("../hbs");

const transporter = nodemailer.createTransport({
  host: mailHost,
  port: 465,
  secure: true,
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

transporter.use("compile", hbs(hbsOptions));

module.exports = {
  transporter,
};
