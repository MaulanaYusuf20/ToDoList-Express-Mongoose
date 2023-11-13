const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./config/db");
const allRoutes = require("./routes");

db.then(() => {
    console.log("Berhasil koneksi ke mongoDB");
}).catch(() => {
    console.log("Gagal koneksi ke mongoDB");
});

app.use(cors());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
