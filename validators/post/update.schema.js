const Joi = require("joi");

module.exports.updatePostSchema = Joi.object({
  content : Joi.string().required(),
});
