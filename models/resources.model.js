// resources include videos and articles

const { Schema, model, Types } = require("mongoose");

// Declare the Schema of the Mongo model
const resourceSchema = new Schema(
  {
    datePosted: {
      type: Date,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["video", "article"],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const Resource = model("Resource", resourceSchema);

module.exports = {
  Resource,
};
