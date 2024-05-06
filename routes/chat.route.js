const { Router } = require("express");
const { createChat, deleteChat } = require("../controllers/chat.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const chatRouter = Router();

chatRouter.route("/create").post(authMiddleware, createChat);

chatRouter.route("/delete/:id").post(authMiddleware, deleteChat);

module.exports = chatRouter;
