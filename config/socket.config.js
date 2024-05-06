const UnauthorizedRequestError = require("../exceptions/unauthorized.exception");
const { socketAuthMiddleware } = require("../middlewares/socketAuth.middleware");
const registerChatHandlers = require("../socket/chatHandler.socket");
const { io } = require("./app.config");

// configure new namespace for chats
const chat = io.of("chat-namespace")

// add authentication middleware
chat.use((socket, next) => {
    if (socketAuthMiddleware(socket)) {
      next();
    } else {
      next(new UnauthorizedRequestError("invalid request"));
    }
  })

// connection handler
const onConnection = (socket) => {
    registerChatHandlers(io, socket);
  }


chat.on("connection", onConnection);

