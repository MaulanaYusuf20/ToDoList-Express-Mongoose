const User = require("../model/User");

module.exports = {
    getAllUser: async (req, res) => {
        const users = await User.find();

        res.status(200).json({
            message: "Data user berhasil didapatkan",
            data: users,
        });
    },
};
