"use strict";

const express = require("express");
const app = express();

const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // -> 미들 웨어 등록 메소드
app.use(express.static(`${__dirname}/src/public`))

module.exports = app;