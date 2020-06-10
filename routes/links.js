const router = require("express").Router();
const { addLink, deleteLink, getLinks } = require("../controllers/links");
const { s3Upload } = require("../middlewares/multer");
const { verifyUser } = require("../middlewares/auth");

router.post("/:linkType/add", verifyUser, s3Upload, addLink);
router.post("/:linkType/delete", verifyUser, deleteLink);
router.get("/:linkType/get", getLinks);

module.exports = {
  linkRoutes: router,
};
