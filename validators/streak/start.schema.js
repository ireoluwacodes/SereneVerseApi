const Joi = require("joi");

module.exports.startStreakSchema = Joi.object({
  name : Joi.string().required(),
});
