const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

//localhost:3000/api/v1/author/
router.get("/", getAuthors);

router.get("/:id", getAuthorById);

router.post("/", createAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
