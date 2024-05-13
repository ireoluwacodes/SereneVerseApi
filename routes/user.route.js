const { Router } = require("express");

const {
  getAllUsers,
  updatePassword,
  getExpertContact,
  addExpertContact,
  uploadProfileImage,
  getContactHistory,
  updateProfile,
  createAdmin,
  createConsultant,
  upload,
  deleteConsultant,
} = require("../controllers/user.controller");
const validator = require("../middlewares/validator.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const { updatePassSchema } = require("../validators/auth/updatePass.schema");
const { uploadPhoto } = require("../middlewares/upload.middleware");
const { editProfileSchema } = require("../validators/auth/editProfile.schema");
const {
  createConsultantSchema,
} = require("../validators/auth/createConsultant.schema");

const userRouter = Router();

userRouter
  .route("/update")
  .post(validator(updatePassSchema), authMiddleware, updatePassword);

userRouter
  .route("/admin/create-expert")
  .post(
    validator(createConsultantSchema),
    authMiddleware,
    isAdmin,
    createConsultant
  );

userRouter
  .route("/admin/delete-expert/:id")
  .delete(authMiddleware, isAdmin, deleteConsultant);

// userRouter.route("/admin/create-admin").post(validator(createAdminSchema), authMiddleware, isAdmin, createAdmin);

userRouter
  .route("/upload")
  .post(authMiddleware, uploadPhoto.single("image"), uploadProfileImage);

userRouter
  .route("/admin/upload")
  .post(authMiddleware, isAdmin, uploadPhoto.single("image"), upload);

userRouter
  .route("/edit-profile")
  .post(validator(editProfileSchema), authMiddleware, updateProfile);

userRouter.route("/contact-history").get(authMiddleware, getContactHistory);

userRouter
  .route("/add-expert-contact/:id")
  .get(authMiddleware, addExpertContact);

userRouter.route("/").get(authMiddleware, isAdmin, getAllUsers);

userRouter.route("/consult").get(authMiddleware, getExpertContact);

module.exports = userRouter;
