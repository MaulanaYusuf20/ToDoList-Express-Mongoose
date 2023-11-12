const mongoose = require("mongoose");

const DB_URL =
    "mongodb+srv://maulanayusuf201001:3YVWBxcWxpxMW6LE@cluster0.pnzezr4.mongodb.net/moongose";

const db = mongoose.connect(DB_URL);

module.exports = db;
