const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("../middlewares/auth.google.middleware");
const { Server } = require("socket.io");
const http = require("http");

const notFound = require("../middlewares/notfound.middleware");
const errHandler = require("../middlewares/errhandler.middleware");
const router = require("../routes/app.route");
const authRouter = require("../routes/auth.route");
const userRouter = require("../routes/user.route");
const { resourceRouter } = require("../routes/resource.route");
const { postRouter } = require("../routes/post.route");
const { streakRouter } = require("../routes/streak.route");
const { sessionSecret } = require("./constants.config");
const session = require("express-session");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["POST, GET, PUT, PATCH, DELETE"],
    credentials: true,
  })
);
app.use(
  session({ secret: sessionSecret, resave: true, saveUninitialized: true })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// socket(chat) shits
export const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  },
});

app.use(router);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/resource", resourceRouter);
app.use("/post", postRouter);
app.use("/streak", streakRouter);

app.use(notFound);
app.use(errHandler);

module.exports = app;
