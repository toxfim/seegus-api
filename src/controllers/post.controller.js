const Post = require('../models/post.model');

// Post yaratish
const createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content, author: req.user.id });

  try {
    await newPost.save();
    res.status(201).json({ message: 'Post yaratildi', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

// Postlar ro'yxatini olish
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name email');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

// Postni yangilash
const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
    res.status(200).json({ message: 'Post yangilandi', post: updatedPost });
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

// Postni o'chirish
const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: 'Post o\'chirildi' });
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

module.exports = { createPost, getPosts, updatePost, deletePost };
