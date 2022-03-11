const Todo = require("../models/todo.model");
const auth = require("../middleware/auth");
const express = require("express");

const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", todoController.createNewTodo);
router.get("/", auth, todoController.getAllTodos);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.updateAllTodo);
router.patch("/:id", todoController.updateOneTodo);
module.exports = router;
