const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { Streak } = require("../models/streaks.model");

module.exports.startNewStreak = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.endCurrentStreak = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.restartExistingStreak = AsyncHandler(async (req, res, next) => {
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

  module.exports.getUserStreaks = AsyncHandler(async (req, res, next) => {
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
  
  module.exports.getActiveStreak = AsyncHandler(async (req, res, next) => {
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
  
  
