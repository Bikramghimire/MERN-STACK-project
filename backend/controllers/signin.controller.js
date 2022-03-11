const Joi = require("Joi");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signInUser: async (req, res) => {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(6).max(200).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).send("invalid email.....");
      }
      const validpassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validpassword) {
        return res.status(400).send("invalid password.....");
      }
      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(
        { _id: user._id, name: user.name, email: user.email },
        secretKey
      );
      res.status(200).send(token);
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  },
};
