const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const { connectToMongoDB } = require("./connectDB/db");

const blogRoutes = require("./routes/blogs");

// express app
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// error handlers
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// - Routes
app.use("/api/blogs", blogRoutes);

// listen for request
connectToMongoDB(
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
);
