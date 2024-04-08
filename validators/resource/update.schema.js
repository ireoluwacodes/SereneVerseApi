const Joi = require("joi");

module.exports.updateResourceSchema = Joi.object({
  content : Joi.string().required(),
});
