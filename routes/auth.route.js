const { Router } = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  confirmOtp,
  refresh,
  logOut,
} = require("../controllers/auth.controller");
const validator = require("../middlewares/validator.middleware");
const { loginSchema } = require("../validators/login.schema");
const { createUserSchema } = require("../validators/signup.schema");
const { checkEmailSchema } = require("../validators/checkForEmail.schema");
const { checkPassSchema } = require("../validators/checkForPass.schema");
const { otpSchema } = require("../validators/otp.schema");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = Router();

authRouter.route("/register").post(validator(createUserSchema), register);

authRouter.route("/login").post(validator(loginSchema), login);

authRouter.route("/password/forgot").post(validator(checkEmailSchema), forgotPassword);

authRouter.route("/refresh").get(authMiddleware, refresh);

authRouter.route("/password/reset").patch(validator(checkPassSchema), authMiddleware, resetPassword);

authRouter.route("/confirm-otp").post(validator(otpSchema), confirmOtp);

authRouter.route("/sign-out").get(authMiddleware, logOut);

module.exports = authRouter;
