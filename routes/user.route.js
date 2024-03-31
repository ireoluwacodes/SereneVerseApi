const { Router } = require("express");

const {
  getAllUsers,
  updatePassword,
  getExpertContact,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");

const userRouter = Router();

userRouter.route("/update").post(authMiddleware, updatePassword);

userRouter.route("/").get(authMiddleware, isAdmin, getAllUsers);

userRouter.route("/consult").get(authMiddleware, getExpertContact);

module.exports = userRouter;
