const router = require("express").Router();
const { addLink, deleteLink, getLinks } = require("../controllers/links");
const { s3Upload } = require("../middlewares/multer");

router.post("/:linkType/add", s3Upload, addLink);
router.post("/:linkType/delete", deleteLink);
router.get("/:linkType/get", getLinks);

module.exports = {
  linkRoutes: router,
};
