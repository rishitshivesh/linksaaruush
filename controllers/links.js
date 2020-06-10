const {
  certificateModel,
  competitionModel,
  webinarModel,
  workshopModel,
} = require("../models/links");

const aws = require("aws-sdk");
const s3 = new aws.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sslEnabled: true,
});

const { ErrorHandler } = require("../helpers/errorHandler");

const addLink = async (req, res, next) => {
  try {
    const linkType = req.params.linkType;

    const linkUrl = req.body.link;
    const linkImageUrl = req.file.location;
    const linkImageKey = req.file.key;
    const heading = req.body.heading;
    const description = req.body.description;

    if (!linkUrl || !linkImageKey || !linkImageUrl || !heading) {
      throw new ErrorHandler(400, "Bad request. Invalid Parameters");
    }

    const linkSchema = {
      imageUrl: linkImageUrl,
      key: linkImageKey,
      heading,
      description,
      link: linkUrl,
    };

    const linkModel =
      linkType === "webinar"
        ? new webinarModel(linkSchema)
        : linkType === "workshop"
        ? new workshopModel(linkSchema)
        : linkType === "certificate"
        ? new certificateModel(linkSchema)
        : new competitionModel(linkSchema);

    const result = await linkModel.save();
    if (result) {
      res.status(200).json({
        status: "OK",
      });
    }
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

const deleteLink = async (req, res, next) => {
  try {
    const linkType = req.params.linkType;

    const linkId = req.body.id;

    if (!linkId) {
      throw new ErrorHandler(400, "Bad request. Invalid Parameters");
    }

    const deletedLink =
      linkType === "webinar"
        ? await webinarModel.findByIdAndRemove(linkId)
        : linkType === "workshop"
        ? await workshopModel.findByIdAndRemove(linkId)
        : linkType === "certificate"
        ? await certificateModel.findByIdAndRemove(linkId)
        : await competitionModel.findByIdAndRemove(linkId);

    if (!deletedLink) {
      throw new ErrorHandler(404, "Link Not Found");
    }

    const result = await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET,
        Key: deletedLink.key,
      })
      .promise();
    res.status(200).json({
      status: "OK",
    });
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      console.log(error);
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

const getLinks = async (req, res, next) => {
  try {
    const linkType = req.params.linkType;
    if (
      !["workshop", "certificate", "webinar", "competition"].includes(linkType)
    ) {
      throw new ErrorHandler(404, "Page Not Found");
    }

    const result =
      linkType === "webinar"
        ? await webinarModel.find()
        : linkType === "workshop"
        ? await workshopModel.find()
        : linkType === "certificate"
        ? await certificateModel.find()
        : await competitionModel.find();

    if (!result.length) {
      throw new ErrorHandler(404, "No Links");
    } else {
      res.status(200).json({
        status: "OK",
        data: result,
      });
    }
  } catch (error) {
    if (error instanceof ErrorHandler) {
      next(error);
    } else {
      console.log(error);
      next(new ErrorHandler(500, "Internal Server Error."));
    }
  }
};

module.exports = {
  addLink,
  deleteLink,
  getLinks,
};
