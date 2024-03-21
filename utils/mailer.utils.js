const { mailUser, transporter } = require("../config/constants.config");

const sendMail = async (email, subject, template, otp, fullName) => {
  try {
    let mailOption = {
      from: mailUser,
      to: email,
      subject,
      template,
      context: {
        otp,
        fullName
      },
    };
    let info = await transporter.sendMail(mailOption);
    return info.response;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  sendMail,
};
