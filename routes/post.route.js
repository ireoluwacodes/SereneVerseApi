const { Router } = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const {
  createDailyPost,
  createComment,
  deleteComment,
  deleteDailyPost,
  updateDailyPost,
  getAllDailyPost,
  getTodayPost,
} = require("../controllers/post.controller");

const postRouter = Router();

postRouter.route("/create").post(authMiddleware, isAdmin, createDailyPost);

postRouter.route("/comment/:id").post(authMiddleware, createComment);

postRouter.route("/comment/:id").delete(authMiddleware, deleteComment);

postRouter.route("/delete/:id").delete(authMiddleware, isAdmin, deleteDailyPost);

postRouter.route("/update/:id").patch(authMiddleware, isAdmin, updateDailyPost);

postRouter.route("/all").get(authMiddleware, isAdmin, getAllDailyPost);

postRouter.route("/").get(authMiddleware, getTodayPost);

module.exports = {
  postRouter,
};
