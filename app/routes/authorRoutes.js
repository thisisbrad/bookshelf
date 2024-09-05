const express = require("express");
const router = express.Router();

// localhost:3000/api/v1/authors
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    messsage: `${req.method} - Request made to Author API`,
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    success: true,
    messsage: `${req.method} - Request made to Author API`,
  });
});

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id >>>", id);
  res.status(200).json({
    success: true,
    id: id,
    messsage: `${req.method} - Request made to Author API`,
  });
});

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log("id >>>", id);
  res.status(200).json({
    success: true,
    id,
    messsage: `${req.method} - Request made to Author API`,
  });
});

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id >>>", id);
  res.status(200).json({
    success: true,
    id: id,
    messsage: `${req.method} - Request made to Author API`,
  });
});

module.exports = router;
