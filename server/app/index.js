const express = require("express");
const morgan = require("morgan");
const app = express();
const routeHandler = require("./routes/");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", routeHandler);

app.use("*", (req, res) => {
  res.status(404).send({ success: false, message: "route not found" });
});

module.exports = app;
