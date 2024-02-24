import { mailUser, transporter } from "../config";

export const sendMail = async (email, subject, template, otp) => {
  try {
    let mailOption = {
      from: mailUser,
      to: email,
      subject,
      template,
      context: {
        otp,
      },
    };
    let info = await transporter.sendMail(mailOption);
    return info;
  } catch (error) {
    throw new Error(error);
  }
};
