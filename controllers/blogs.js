const mongoose = require("mongoose");
const blogModel = require("../models/blogs");

// GET all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// GET a single blog
const getABlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  try {
    const blog = await blogModel.findById(id);

    if (!blog) {
      return res.status(404).json({ error: "No such blog" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// CREATE a new blog
const createBlog = (req, res) => {
  res.status(200).json("create a blogs");
};

// UPDATE a blog
const updateBlog = (req, res) => {
  res.status(200).json("update a blogs");
};

// DELETE a blog
const deleteBlog = (req, res) => {
  res.status(200).json("delete a blogs");
};

module.exports = {
  getAllBlogs,
  getABlog,
  createBlog,
  updateBlog,
  deleteBlog
};
