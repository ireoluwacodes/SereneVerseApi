const Joi = require("joi");

module.exports.createCommentSchema = Joi.object({
  comment: Joi.string().required(),
});
