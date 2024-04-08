const Joi = require("joi");

module.exports.createResourceSchema = Joi.object({
  datePosted: Joi.date().required(),
  type : Joi.string().required().valid(...["video", "article"]),
  content : Joi.string().required(),
});
