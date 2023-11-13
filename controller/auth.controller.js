const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

module.exports = {
    login: async (req, res) => {
        const data = req.body;

        const { email, password } = data;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Data yang diisi tidak lengkap!" });
        }

        try {
            const user = await User.findOne({ email: data.email });

            if (!user) {
                return res
                    .status(404)
                    .json({ message: "Email tidak ditemukan!" });
            }

            const passwordMatch = bcrypt.compareSync(
                data.password,
                user.password
            );

            if (!passwordMatch) {
                return res
                    .status(400)
                    .json({ message: "Email atau password salah!" });
            }

            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_KEY
            );

            res.status(200).json({
                message: "Berhasil login!",
                data: {
                    userId: user._id,
                    name: user.name,
                    token,
                },
            });
        } catch (error) {
            res.status(400).json({
                message: "Email atau password salah!",
                error: error.message,
            });
        }
    },
    register: async (req, res) => {
        const data = req.body;

        const { name, username, email, password } = data;
        if (!name || !username || !email || !password) {
            return res
                .status(400)
                .json({ message: "Data yang diisi tidak lengkap!" });
        }

        try {
            const checkEmail = await User.findOne({ email: data.email });

            if (checkEmail) {
                return res
                    .status(409)
                    .json({ message: "Email sudah digunakan" });
            }

            const hashPassword = bcrypt.hashSync(data.password, saltRounds);
            data.password = hashPassword;

            const user = await User.create(data);

            res.status(201).json({
                message: "Data berhasil dibuat!",
                data: {
                    userId: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error) {
            res.status(500).json({
                message: "gagal membuat user",
                error: error.message,
            });
        }
    },
};
