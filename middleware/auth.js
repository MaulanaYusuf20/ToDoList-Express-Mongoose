require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header) {
            return res.status(401).json({ message: "Akses ditolak!" });
        }

        const token = header.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Akses ditolak!" });
        }

        const user = jwt.verify(token, process.env.JWT_KEY);
        req.user = user;

        next();
    } catch (err) {
        res.status(400).json(err.message);
    }
};

module.exports = verifyToken;
