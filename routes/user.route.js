const express = require("express");
const { getAllUser } = require("../controller/user.controller");
const route = express.Router();

route.get("/", getAllUser);

module.exports = route;
