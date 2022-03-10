const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoute = require("./routes/todo.route");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const mongoDB_URL = process.env.MONGO_URL;
const Port = process.env.PORT || 5000;
mongoose
  .connect(mongoDB_URL)
  .then(() => console.log("mongodb is connected successfully"))
  .catch((err) => console.log("mongodb conmnection is failed", err.message));

app.get("/", (req, res) => {
  console.log("welcome to the todos app");
});

app.use("/api/todos", todoRoute);

app.listen(Port, () => {
  console.log(`server is running to the port ${Port}`);
});