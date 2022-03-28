const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 200,
    },
    author: {
      type: String,
    },
    uid: {
      type: String,
    },
    isComplete: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
