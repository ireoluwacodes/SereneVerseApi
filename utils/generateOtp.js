const generateOtp = () => {
  let otp = Math.round(Math.random() * 1e4);
  return otp;
};

module.exports = {
  generateOtp,
};
