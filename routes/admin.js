const router = require("express").Router();
const { register, login } = require("../controllers/admin");

router.post("/register", register);
router.post("/login", login);

module.exports = {
  adminRoutes: router,
};
