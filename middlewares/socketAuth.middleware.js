const { verify } = require("jsonwebtoken");
const { verifyToken } = require("../utils/token.utils");

const socketAuthMiddleware = async (socket) => {
  try {
    const { token } = socket.handshake.auth;
    const payload = await verifyToken(token);
    if (!payload) throw new Error();
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = {
  socketAuthMiddleware,
};
