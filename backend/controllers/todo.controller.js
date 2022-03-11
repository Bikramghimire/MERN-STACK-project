const Todo = require("../models/todo.model");
const Joi = require("joi");

module.exports = {
  createNewTodo: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(200).required(),
      author: Joi.string().min(3).max(30),
      uid: Joi.string(),
      isComplete: Joi.boolean(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    try {
      const { name, author, isComplete, uid } = req.body;
      let todo = new Todo({
        name,
        author,
        isComplete,
        uid,
      });
      const result = await todo.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
  },

  getAllTodos: async (req, res, next) => {
    try {
      const result = await Todo.find().sort({ createdAt: -1 });
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  deleteTodo: async (req, res, next) => {
    try {
      const result = await Todo.findByIdAndDelete(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  updateAllTodo: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(200).required(),
      author: Joi.string().min(3).max(30),
      uid: Joi.string(),
      isComplete: Joi.boolean(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const result = await Todo.findById(req.params.id);
    if (!result) {
      res.status(400).send({ message: "no such item present" });
      return;
    }
    try {
      const { name, author, isComplete, uid } = req.body;
      const result = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          name,
          author,
          isComplete,
          uid,
        },
        {
          new: true,
        }
      );
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
      console.log(error);
    }
  },
  updateOneTodo: async (req, res, next) => {
    const resultID = await Todo.findById(req.params.id);

    console.log(resultID.isComplete);
    if (!resultID) {
      res.status(400).send({ message: "no such item present" });
      return;
    }
    try {
      const result = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          isComplete: !resultID.isComplete,
        },
        {
          new: true,
        }
      );
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: error.message });
      console.log(error);
    }
  },
};
