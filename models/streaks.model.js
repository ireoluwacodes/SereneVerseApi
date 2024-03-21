const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const streakSchema = new mongoose.Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "active",
    enum: ["active", "inactive"],
  },
  name: {
    type: String,
  },
  currentStreak: {
    type: String,
  },
  pastStreak: {
    type: String,
  },
  currentStreakStarted: {
    type: String,
  },
});

//Export the model
const Streak = mongoose.model("Streak", streakSchema);

module.exports = {
  Streak,
};
