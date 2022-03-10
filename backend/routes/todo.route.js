const Todo = require("../models/todo.model");
const express = require("express");

const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createNewTodo);
router.get("/", todoController.getAllTodos);
router.delete("/:id", todoController.deleteTodo);
module.exports = router;
