const AsyncHandler = require("express-async-handler");
const status = require("http-status");
const ForbiddenRequestError = require("../exceptions/forbidden.exception");
const UnauthorizedRequestError = require("../exceptions/badRequest.exception");
const { hashPassword, comparePassword } = require("../utils/hashing.utils");
const { validateDbId } = require("../utils/validateMongoId");
const { User } = require("../models/user.model");

// controller to retrieve all users(admin)
const getAllUsers = AsyncHandler(async (req, res, next) => {
  try {
    // fetches all users in the db
    const users = await User.find({});

    // removes sensitive/unnecessary fields from each user
    const sanitizedUsers = users.map((user) => {
      user.hash = undefined;
      user.__v = undefined;
      user.otp = undefined;
      user.otpCreatedAt = undefined;
      user.otpExpiresIn = undefined;
      user.refreshToken = undefined;
      return user;
    });

    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: sanitizedUsers,
    });
  } catch (error) {
    next(error);
  }
});

// controller to update user password
const updatePassword = AsyncHandler(async (req, res, next) => {
  try {
    const id = req.userId;
    await validateDbId(id);

    // destructure values from request body
    const { newPass, currPass } = req.body;

    const user = await User.findById(id);
    if (!user) throw new ForbiddenRequestError("User not found");

    // validate old password and set new password
    const validate = await comparePassword(user.hash, currPass);
    if (!validate) throw new UnauthorizedRequestError("Password mismatch");

    const hash = await hashPassword(newPass);
    user.hash = hash;
    await user.save();

    const sanitizedUser = {
      ...user._doc,
      hash: undefined,
      password: newPass,
      __v: undefined,
      otp: undefined,
      otpCreatedAt: undefined,
      otpExpiresIn: undefined,
      refreshToken: undefined,
    };
    return res.status(status.CREATED).json({
      status: "success",
      statusCode: status.CREATED,
      data: sanitizedUser,
    });
  } catch (error) {
    next(error);
  }
});

const getExpertContact = AsyncHandler(async (req, res, next) => {
  try {
    const { userId } = req;
    const expertArr = await User.find({ role: "consultant" });
    return res.status(status.OK).json({
      status: "success",
      statusCode: status.OK,
      data: {
        expertArr,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getAllUsers,
  updatePassword,
  getExpertContact,
};
