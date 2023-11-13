const Todo = require("../model/Todo");

module.exports = {
    getAllTodo: async (req, res) => {
        const userId = req.user.id;

        try {
            const todos = await Todo.find({ userID: userId });

            res.status(200).json({
                message: "Berhasil mendapatkan Todo",
                data: todos,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan Todo",
                error: error.message,
            });
        }
    },

    createTodo: async (req, res) => {
        const data = req.body;

        userId = req.user.id;

        if (!data.value) {
            return res
                .status(400)
                .json({ message: "Data yang diisi tidak lengkap!" });
        }

        try {
            const todo = await Todo.create({
                value: data.value,
                completed: false,
                userID: userId,
            });

            res.status(201).json({
                message: "Berhasil membuat Todo",
                data: todo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal membuat Todo",
                error: error.message,
            });
        }
    },

    getTodoById: async (req, res) => {
        const todoId = req.params.id;

        try {
            const todo = await Todo.findById(todoId);

            if (!todo) {
                return req.status(404).json({
                    message: "Todo tidak ditemukan",
                    data: todo,
                });
            }

            res.status(200).json({
                message: "Berhasil mendapatkan Todo",
                data: todo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan todo",
                error: error.message,
            });
        }
    },

    deleteTodo: async (req, res) => {
        const todoId = req.params.id;

        try {
            const todo = await Todo.findByIdAndDelete(todoId);

            if (!todo) {
                return req.status(404).json({
                    message: "Todo tidak ditemukan",
                    data: todo,
                });
            }

            res.status(200).json({
                message: "Berhasil menghapus Todo by Id",
                data: todo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menghapus todo",
                error: error.message,
            });
        }
    },

    deleteAllTodo: async (req, res) => {
        const userId = req.user.id;

        try {
            const todo = await Todo.deleteMany({
                userID: userId,
            });

            res.status(200).json({
                message: "Berhasil menghapus Todo",
                data: todo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menghapus todo",
                error: error.message,
            });
        }
    },

    editTodo: async (req, res) => {
        const todoId = req.params.id;
        const data = req.body;

        try {
            const todo = await Todo.findByIdAndUpdate(todoId, data, {
                new: true,
            });

            if (!todo) {
                return req.status(404).json({
                    message: "Todo tidak ditemukan",
                    data: todo,
                });
            }

            res.status(200).json({
                message: "Berhasil mengubah Todo",
                data: todo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mengubah todo",
                error: error.message,
            });
        }
    },
};
