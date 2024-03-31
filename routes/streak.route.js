const { Router } = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const {
  startNewStreak,
  endCurrentStreak,
  restartExistingStreak,
  getUserStreaks,
  getActiveStreak,
} = require("../controllers/streak.controller");

const streakRouter = Router();

streakRouter.route("/start").post(authMiddleware, startNewStreak);

streakRouter.route("/end/:id").get(authMiddleware, endCurrentStreak);

streakRouter.route("/restart/:id").get(authMiddleware, restartExistingStreak);

streakRouter.route("/").get(authMiddleware, getUserStreaks);

streakRouter.route("/active").get(authMiddleware, getActiveStreak);

module.exports = {
  streakRouter,
};
