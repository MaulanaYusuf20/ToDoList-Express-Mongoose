const express = require("express");
const {
    getAllTodo,
    createTodo,
    getTodoById,
    deleteTodo,
    deleteAllTodo,
    editTodo,
} = require("../controller/todo.controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", verifyToken, getAllTodo);
route.post("/", verifyToken, createTodo);
route.get("/:id", verifyToken, getTodoById);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/", verifyToken, deleteAllTodo);
route.put("/:id", verifyToken, editTodo);

module.exports = route;
