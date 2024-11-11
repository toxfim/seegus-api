const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../../controllers/post.controller");
const { authenticate } = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authenticate, createPost);
router.get("/", getPosts);
router.put("/:postId", authenticate, updatePost);
router.delete("/:postId", authenticate, deletePost);

module.exports = router;
