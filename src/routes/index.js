const express = require("express");
const router = express.Router();
const postsRouter = require("./posts");
const authRouter = require("./auth");
const userRouter = require("./user");

// `/posts` yo'nalishini `postsRouter` bilan bog'lash
router.use("/api/auth", authRouter);
router.use("/api/posts", postsRouter);
router.use("/api/users", userRouter);

module.exports = router;
