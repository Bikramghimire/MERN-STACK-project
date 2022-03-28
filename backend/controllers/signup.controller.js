const Joi = require("Joi");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  signUpUser: async (req, res) => {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().required(),
      password: Joi.string().min(6).max(200).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .send({ message: "user with the email already exist" });
      }
      const { name, email, password } = req.body;
      user = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
      await user.save();
      const secretKey = process.env.SECRET_KEY;
      const token = jwt.sign(
        { _id: user._id, name: user.name, email: user.email },
        secretKey
      );

      res.status(200).send(token);
    } catch (error) {
      res.status(500).send({ message: "wejgtejw" });
    }
  },
};
