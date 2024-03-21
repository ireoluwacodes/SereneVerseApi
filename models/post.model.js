const { Schema, model, Types } = require("mongoose");

// Declare the Schema of the Mongo model
const postSchema = new Schema(
  {
    postedBy: {
      type: Types.ObjectId,
      ref: "user",
    },
    datePosted: {
      type: Date,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: String,
        required: true,
        madeBy: {
          type: Types.ObjectId,
          ref: "user",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
const Post = model("Post", postSchema);

module.exports = {
  Post,
};
