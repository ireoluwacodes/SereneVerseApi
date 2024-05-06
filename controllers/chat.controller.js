const AsyncHandler = require("express-async-handler");
const { Chat } = require("../models/chat.model");
const { validateDbId } = require("../utils/mongoId.utils");
const status = require("http-status");

const createChat = AsyncHandler(async (req, res, next) => {
  try {
    const { senderId, receiverId, message } = req.body;
    await validateDbId(senderId, receiverId);

    const chat = await Chat.create({
      senderId,
      receiverId,
      message,
    });
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        chat,
      },
    });
  } catch (error) {
    next(error);
  }
});

const deleteChat = AsyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    await validateDbId(id);

    const chat = await Chat.findByIdAndUpdate(id, {
      message: "This message was deleted",
      status: "deleted",
    });
    
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        chat,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  createChat,
  deleteChat,
};
