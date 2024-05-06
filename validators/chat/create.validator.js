const Joi = require("joi");

module.exports.createChatSchema = Joi.object({
  senderId: Joi.string().required(),
  receiverId: Joi.string().required(),
  message: Joi.string().required(),
});
