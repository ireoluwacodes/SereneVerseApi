const AsyncHandler = require("express-async-handler");
const { Chat } = require("../models/chat.model");

const createChat = Asyncandler((req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

const deleteChat = Asyncandler((req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createChat,
  deleteChat,
};
