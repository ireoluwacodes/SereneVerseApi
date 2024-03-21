const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { Post } = require("../models/post.model");

module.exports.createDailyPost = AsyncHandler(async (req, res, next) => {
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

module.exports.createComment = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.deleteComment = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.deleteDailyPost = AsyncHandler(async (req, res, next) => {
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

  module.exports.updateDailyPost = AsyncHandler(async (req, res, next) => {
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

  module.exports.getAllDailyPost = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.getTodayPost = AsyncHandler(async (req, res, next) => {
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
  
  