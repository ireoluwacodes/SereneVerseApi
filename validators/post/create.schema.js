const Joi = require("joi");

module.exports.createPostSchema = Joi.object({
  content: Joi.string().required(),
  title: Joi.string().required(),
});
