const Todo = require("../models/todo.model");
const auth = require("../middleware/auth");
const express = require("express");

const router = express.Router();
const todoController = require("../controllers/todo.controller");

router.post("/", auth, todoController.createNewTodo);
router.get("/", auth, todoController.getAllTodos);
router.delete("/:id", auth, todoController.deleteTodo);
router.put("/:id", auth, todoController.updateAllTodo);
router.patch("/:id", auth, todoController.updateOneTodo);
module.exports = router;
