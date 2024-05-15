const router = require("express").Router();

//localhost:3000/api/v1/author/
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
});

router.put("/:id", (req, res) => {
  // update the author
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Author request` });
});

router.delete("/:id", (req, res) => {
  //delete the author
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
});

module.exports = router;
