const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { Resource } = require("../models/resources.model");

module.exports.addNewResource = AsyncHandler(async (req, res, next) => {
  try {
    const { userId } = req;
    const { datePosted, type, content } = req.body;

    const resource = await Resource.create({
      postedBy: userId,
      datePosted,
      type,
      content,
    });
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        resource,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports.getVideoResources = AsyncHandler(async (req, res, next) => {
  try {
    const { userId } = req;
    const videoResource = await Resource.find({ type: "video" });

    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        videoResource,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports.getArticleResources = AsyncHandler(async (req, res, next) => {
  try {
    const { userId } = req;
    const articleResource = await Resource.find({ type: "article" });

    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        articleResource,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports.deleteResource = AsyncHandler(async (req, res, next) => {
  try {
    const { userId } = req;
    const { id } = req.params;
    await Resource.findByIdAndDelete(id);
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
    const { content } = req.body;
    const { id } = req.params;
    const resource = await Resource.findByIdAndUpdate(
      id,
      { content },
      { new: true }
    );
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
    });
  } catch (error) {
    next(error);
  }
});
