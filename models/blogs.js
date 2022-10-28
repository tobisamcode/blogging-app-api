const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: [true, "title must be unique"]
    },

    description: {
      type: String
    },

    body: {
      type: String,
      required: true
    },

    author: {
      type: String
    },

    read_count: {
      type: Number,
      default: 0
    },

    reading_time: {
      type: String
    },

    tags: {
      type: String,
      enum: ["draft", "published"]
    }
  },
  {
    timestamps: true
  }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
