const app = require("./config/app.config");
const { PORT } = require("./config/constants.config");
const { ConnectDb } = require("./config/db.config");
const cron = require("node-cron");
const { Streak } = require("./models/streaks.model");

const startApp = async (port) => {
  try {
    await ConnectDb();
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

startApp(PORT);

cron.schedule("0 0 * * *", async () => {
  console.log("sobriety tracker running");
  await Streak.aggregate([
    {
      $match: {
        lastUpdated: { $lt: new Date(Date.now() - 48 * 60 * 60 * 1000) },
        status: "active",
      },
    },
    {
      $addFields: {
        pastStreak: "$currentStreak", // Set 'past' to current value
        currentStreak: 0,
        status: "inactive",
      },
    },
    {
      $merge: {
        into: "streaks",
        on: "_id",
        whenMatched: "merge",
        whenNotMatched: "discard",
      },
    },
  ]);
});
