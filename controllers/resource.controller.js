const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");

module.exports.addNewResource = AsyncHandler(async (req, res, next) => {
    try {
      const { userId } = req;
      return res.status(status.OK).json({
        status: "success",
        statusCode: status.OK,
      });
    } catch (error) {
      next(error);
    }
  });

  module.exports.getVideoResources = AsyncHandler(async (req, res, next) => {
    try {
      const { userId } = req;
      return res.status(status.OK).json({
        status: "success",
        statusCode: status.OK,
      });
    } catch (error) {
      next(error);
    }
  });

  module.exports.getArticleResources = AsyncHandler(async (req, res, next) => {
    try {
      const { userId } = req;
      return res.status(status.OK).json({
        status: "success",
        statusCode: status.OK,
      });
    } catch (error) {
      next(error);
    }
  });

  module.exports.deleteResource = AsyncHandler(async (req, res, next) => {
    try {
      const { userId } = req;
      return res.status(status.OK).json({
        status: "success",
        statusCode: status.OK,
      });
    } catch (error) {
      next(error);
    }
  });
  
  module.exports.updateResource = AsyncHandler(async (req, res, next) => {
    try {
      const { userId } = req;
      return res.status(status.OK).json({
        status: "success",
        statusCode: status.OK,
      });
    } catch (error) {
      next(error);
    }
  });
  
  
  
  