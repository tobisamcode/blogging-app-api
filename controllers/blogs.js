const mongoose = require("mongoose");

const blogModel = require("../models/blogs");
const readingTime = require("reading-time");

// GET all blogs

const updateOptionForSorting = require("../helpers/updateOptions");

const getAllBlogs = async (req, res) => {
  try {
    let { page, sortBy, tags, author, title } = req.query;

    const options = {
      limit: 20,
      collation: {
        locale: "en"
      },
      lean: true
    };

    let query = {};
    console.log(page);

    if (page === undefined) {
      page = 1;
    }
    page = Number(page);

    if (!(typeof page === "number")) {
      return res.status(400).json({ error: "invalid page number specified" });
    }
    options.page = page;

    if (tags !== undefined) {
      if (tags !== "draft" && tags !== "published") {
        return res.status(400).json({ error: "invalid tags specified" });
      }

      query.tags = tags;
    }

    if (author !== undefined) {
      query.author = author;
    }

    if (title !== undefined) {
      query.title = title;
    }

    if (sortBy !== undefined) {
      if (
        (sortBy !== "timestamp") &
        (sortBy !== "read-count") &
        (sortBy !== "read-time")
      ) {
        return res.status(400).json({ error: "invalid sortBy parameter" });
      }
      updateOptionForSorting(sortBy, options);
    }

    console.log(options);
    console.log(query);

    const paginatedBlogs = await blogModel.paginate(query, options);
    return res.status(200).json({ data: paginatedBlogs.docs });
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

    let initialCount = blog.read_count;
    const newCount = initialCount + 1;

    await blogModel.updateOne({ read_count: newCount });

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
