const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.get("/", (req, res) => res.json({ message: "Hello World" }));

module.exports = app;
