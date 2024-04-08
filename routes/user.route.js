const { Router } = require("express");

const {
  getAllUsers,
  updatePassword,
  getExpertContact,
} = require("../controllers/user.controller");
const validator = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { updatePassSchema } = require("../validators/auth/updatePass.schema");

const userRouter = Router();

userRouter.route("/update").post(validator(updatePassSchema), authMiddleware, updatePassword);

userRouter.route("/").get(authMiddleware, isAdmin, getAllUsers);

userRouter.route("/consult").get(authMiddleware, getExpertContact);

module.exports = userRouter;
