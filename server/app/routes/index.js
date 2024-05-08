const express = require("express");
const router = express.Router();
const authorRoutes = require("./authorRoutes");

router.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

router.use("/authors", authorRoutes);

module.exports = router;
