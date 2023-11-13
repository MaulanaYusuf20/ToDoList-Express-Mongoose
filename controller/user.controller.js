const User = require("../model/User");

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();

            if (!users) {
                return res.status(404).json({
                    message: "Data user tidak ditemukan",
                    data: users,
                });
            }

            res.status(200).json({
                message: "Data user berhasil didapatkan",
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mendapatkan data",
                error: error.message,
            });
        }
    },
};
