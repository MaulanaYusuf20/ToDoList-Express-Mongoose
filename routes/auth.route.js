const express = require("express");
const { register } = require("../controller/auth.controller");
const route = express.Router();

// route.get("/login", getAllUser);
route.post("/register", register);

module.exports = route;
