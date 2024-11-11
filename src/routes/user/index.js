const express = require("express");
const { getUserInfo } = require("../../controllers/user.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

const router = express.Router();

router.get("/me", authenticate, getUserInfo);

module.exports = router;
