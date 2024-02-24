import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import { mailHost, mailPass, mailUser } from "./constants.config";
import { hbsOptions } from "../hbs";

export const transporter = nodemailer.createTransport({
  host: mailHost,
  port: 465,
  secure: true,
  auth: {
    user: mailUser,
    pass: mailPass,
  },
});

transporter.use("compile", hbs(hbsOptions));
