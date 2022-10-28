const express = require("express");
const blogRouter = express.Router();

const {
  getAllBlogs,
  getABlog,
  createBlog,
  updateBlog,
  deleteBlog
} = require("../controllers/blogs");

// GET all Blogs
blogRouter.get("/", getAllBlogs);

// GET a Blog
blogRouter.get("/:id", getABlog);

// CREATE a Blogs
blogRouter.post("/", createBlog);

// UPDATE all Blogs
blogRouter.patch("/:id", updateBlog);

// DELETE all Blogs
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;
