const { Schema, model, Types } = require("mongoose");

// Declare the Schema of the Mongo model
const chatSchema = new Schema(
  {
    senderId: {
      type: Types.ObjectId,
      ref: "User",
    },
    receiverId: {
      type: Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "deleted"],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Chat = model("Chat", chatSchema);

module.exports = {
  Chat,
};
