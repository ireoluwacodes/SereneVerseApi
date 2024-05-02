const { Router } = require("express");

const {
  getAllUsers,
  updatePassword,
  getExpertContact,
  uploadProfileImage,
  getContactHistory,
  updateProfile,
} = require("../controllers/user.controller");
const validator = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { updatePassSchema } = require("../validators/auth/updatePass.schema");
const { uploadPhoto } = require("../middlewares/upload.middleware");
const { editProfileSchema } = require("../validators/auth/editProfile.schema");

const userRouter = Router();

userRouter
  .route("/update")
  .post(validator(updatePassSchema), authMiddleware, updatePassword);

userRouter
  .route("/upload")
  .post(authMiddleware, uploadPhoto.single("image"), uploadProfileImage);

userRouter
  .route("/edit-profile")
  .post(validator(editProfileSchema), authMiddleware, updateProfile);

userRouter.route("/contact-history").get(authMiddleware, getContactHistory);

userRouter.route("/").get(authMiddleware, isAdmin, getAllUsers);

userRouter.route("/consult").get(authMiddleware, getExpertContact);

module.exports = userRouter;
