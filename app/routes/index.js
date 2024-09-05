const express = require("express");
const router = express.Router();
const authorRoutes = require("./authorRoutes");

// localhost:3000/api/v1
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ sucess: true, message: "Made API request to base route" });
});

// localhost:3000/api/v1/authors
router.use("/authors", authorRoutes);

module.exports = router;
