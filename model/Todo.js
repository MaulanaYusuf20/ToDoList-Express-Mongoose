const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    value: String,
    completed: Boolean,
    userID: {
        type: mongoose.ObjectId,
        ref: "User",
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
