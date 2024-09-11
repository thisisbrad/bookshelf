const express = require("express");
const router = express.Router();
const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

// localhost:3000/api/v1/authors
router.get("/", getAuthors);

router.post("/", createAuthor);

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.get("/:id", getAuthorById);

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.put("/:id", updateAuthor);

// localhost:3000/api/v1/authors/56789iuyhnmjuyu
router.delete("/:id", deleteAuthor);

module.exports = router;
