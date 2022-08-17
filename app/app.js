"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');
dotenv.config();


const app = express();
const accessLogStream = require("./src/config/log")

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));

app.use("/", home); // -> 미들 웨어 등록 메소드

module.exports = app;