const express = require("express");
const blogRouter = express.Router();

// GET all Blogs
blogRouter.get("/", (req, res) => {
  res.status(200).json("get all blogs");
});

// GET a Blog
blogRouter.get("/:id", (req, res) => {
  res.status(200).json("get a blogs");
});

// CREATE a Blogs
blogRouter.post("/", (req, res) => {
  res.status(200).json("create a blogs");
});

// UPDATE all Blogs
blogRouter.patch("/", (req, res) => {
  res.status(200).json("update a blogs");
});

// DELETE all Blogs
blogRouter.delete("/", (req, res) => {
  res.status(200).json("delete a blogs");
});

module.exports = blogRouter;
