const express = require("express");
const morgan = require("morgan");
const app = express();
const routeHandler = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", routeHandler);

app.use("/*", (req, res) => {
  res.status(404).json({ success: false });
});

module.exports = app;
