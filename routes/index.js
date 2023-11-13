const express = require("express");
const route = express.Router();

const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const todoRoute = require("./todo.route");

route.get("/", (req, res) => {
    res.json("Selamat datang di API ToDoList Express Mongoose");
});

route.use("/users", userRoute);
route.use("/auth", authRoute);
route.use("/users/todos", todoRoute);

module.exports = route;
