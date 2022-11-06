const express = require("express");
const blogRouter = express.Router();
const authenticate = require("../middlewares/authenticate");

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
blogRouter.post("/", authenticate, createBlog);

// UPDATE all Blogs
blogRouter.patch("/:id", authenticate, updateBlog);

// DELETE all Blogs
blogRouter.delete("/:id", authenticate, deleteBlog);

module.exports = blogRouter;
