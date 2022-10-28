const mongoose = require("mongoose");
const blogModel = require("../models/blogs");
const readingTime = require("reading-time");

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
  count++;
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
const createBlog = async (req, res) => {
  const { title, description, body, author, tags } = req.body;

  const stats = readingTime(body);
  const { text } = stats;

  try {
    const blog = await blogModel.create({
      title,
      description,
      body,
      author,
      tags,
      reading_time: text
    });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  try {
    const blog = await blogModel.findByIdAndUpdate({ _id: id }, { ...body });

    if (!blog) {
      return res.status(404).json({ error: "No such blog" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
};

// DELETE a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog" });
  }

  try {
    const blog = await blogModel.findByIdAndDelete({ _id: id });

    if (!blog) {
      return res.status(404).json({ error: "No such blog" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  getAllBlogs,
  getABlog,
  createBlog,
  updateBlog,
  deleteBlog
};
