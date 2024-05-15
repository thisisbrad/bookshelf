const router = require("express").Router();
const {
  getAllAuthors,
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

//localhost:3000/api/v1/author/
router.get("/", getAllAuthors);

router.get("/:id", getAuthor);

router.post("/", createAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
