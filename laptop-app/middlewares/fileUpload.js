const catchHandler = require("../utils/catch-handler");
const multer = require('multer')

module.exports = {
  uploadLocal: (fieldName) => {
    // membuat storage / setting storage (file disimpan dimana)
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./public"); // destinasi simpan file
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + "-" + file.originalname); // setting nama file
      },
    });

    const upload = multer({ storage }).single(fieldName); // setting uploader

    return (req, res, next) => {
      upload(req, res, (err) => {
        if (err) {
          catchHandler(res, err);
        }
        next();
      });
    };
  },
};
