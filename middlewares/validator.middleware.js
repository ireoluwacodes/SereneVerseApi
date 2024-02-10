const Joi = require("joi");
const BadRequestError = require("../exceptions/badRequest.exception");

const validator = (schema)=>async (req, res, next)=>{
    try {
        const { body } = req;
        const value = await schema.validateAsync(body);
        next();
      } catch (error) {
       throw new BadRequestError(error)
      }
}

module.exports = validator