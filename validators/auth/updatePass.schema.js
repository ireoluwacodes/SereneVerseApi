const Joi = require("joi");

module.exports.updatePassSchema = Joi.object({
  currPass: Joi.string().required(),
  newPass: Joi.string().required(),
});
