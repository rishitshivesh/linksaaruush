const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid");
const { ErrorHandler } = require("../helpers/errorHandler");

const s3 = new aws.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sslEnabled: true,
});

const fileFilter = (req, file, cb) => {
  const filter = ["image/png", "image/jpeg", "image/svg+xml"];
  if (filter.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ErrorHandler(415, "Unsupported Media Type."), false);
  }
};

const limits = {
  files: 1,
  fileSize: 5 * 1024 * 1024,
};

const storageOptions = multerS3({
  s3: s3,
  bucket: process.env.AWS_BUCKET,
  acl: "public-read",
  key: function (req, file, cb) {
    const name =
      req.params.linkType + "/" + uuid.v4() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({
  storage: storageOptions,
  fileFilter: fileFilter,
  limits: limits,
}).single("image");

const s3Upload = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_COUNT") {
        next(new ErrorHandler(415, "Too many files."));
      } else if (err.code === "LIMIT_FILE_SIZE") {
        next(new ErrorHandler(415, "File too large."));
      } else {
        console.log(err);
        next(err);
      }
    } else {
      return next();
    }
  });
};

module.exports = {
  s3Upload,
};
