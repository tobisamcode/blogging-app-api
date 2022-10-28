const getAllBlogs = (req, res) => {
  res.status(200).json("get all blogs");
};

const getABlog = (req, res) => {
  res.status(200).json("get a blogs");
};

const createBlog = (req, res) => {
  res.status(200).json("create a blogs");
};

const updateBlog = (req, res) => {
  res.status(200).json("update a blogs");
};

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
