const User = require("../model/User");

module.exports = {
    login: async (req, res) => {},
    register: async (req, res) => {
        const data = req.body;

        try {
            const user = await User.create(data);

            res.status(201).json({
                message: "Data berhasil dibuat!",
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                message: "gagal membuat user",
                error: error.message,
            });
        }
    },
};
