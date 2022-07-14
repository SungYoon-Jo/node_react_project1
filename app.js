"use strict";

const express = require("express");
const app = express();

const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // -> 미들 웨어 등록 메소드

module.exports = app;