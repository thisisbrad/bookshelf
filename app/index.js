require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/config");
const app = express();
const routeHandler = require("./routes");

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", routeHandler);

module.exports = app;
