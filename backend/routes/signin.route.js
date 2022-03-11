//joi
//does the user exist
//validate password
//jwt=>send the client
const express = require("express");
const router = express.Router();
const signInUserController = require("../controllers/signin.controller");

router.post("/", signInUserController.signInUser);

module.exports = router;
