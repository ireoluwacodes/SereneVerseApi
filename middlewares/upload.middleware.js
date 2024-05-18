const multer = require("multer");
const path = require("path");
const { nodeEnv } = require("../config/constants.config");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // nodeEnv == "production"
    //   ? cb(null, "/tmp")
    //   : cb(null, path.join(__dirname, "../tmp"));
    cb(null, "/tmp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported Format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: {
    fileSize: 20000000,
  },
});

module.exports = {
  uploadPhoto,
};
