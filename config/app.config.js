const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const notFound = require("../middlewares/notfound.middleware");
const errHandler = require("../middlewares/errhandler.middleware");
const router = require("../routes/app.route");
const authRouter = require("../routes/auth.route");
const userRouter = require("../routes/user.route");
const { resourceRouter } = require("../routes/resource.route");
const { postRouter } = require("../routes/post.route");
const { streakRouter } = require("../routes/streak.route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(router);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/resource", resourceRouter);
app.use("/post", postRouter);
app.use("/streak", streakRouter);

app.use(notFound);
app.use(errHandler);

module.exports = app;
