const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("../middlewares/auth.google.middleware");
const MongoStore = require("connect-mongo");

const notFound = require("../middlewares/notfound.middleware");
const errHandler = require("../middlewares/errhandler.middleware");
const router = require("../routes/app.route");
const authRouter = require("../routes/auth.route");
const userRouter = require("../routes/user.route");
const chatRouter = require("../routes/chat.route");
const { resourceRouter } = require("../routes/resource.route");
const { postRouter } = require("../routes/post.route");
const { streakRouter } = require("../routes/streak.route");
const { sessionSecret } = require("./constants.config");
const session = require("express-session");
const { nodeEnv, localMUrl, webMUrl } = require("./constants.config");

const selectDb = () => {
  if (nodeEnv == "production") {
    return webMUrl;
  } else {
    return localMUrl;
  }
};

const app = express();

app.use(
  cors({
    origin: ["https://serene-verse.vercel.app/", "http://127.0.0.1:3000"],
    methods: ["POST, GET, PUT, PATCH, DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: selectDb(),
      ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
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
app.use("/chat", chatRouter);

app.use(notFound);
app.use(errHandler);

module.exports = app;
