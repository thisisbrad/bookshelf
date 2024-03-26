const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routeHandler = require("./routes");

// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//   })
// );
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", routeHandler);

module.exports = app;
