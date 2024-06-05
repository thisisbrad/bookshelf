const express = require('express');
const router = express.Router();
const {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/authorCtrl');

// GET /api/v1/authors
router.get('/', getAuthors);

router.get('/:id', getAuthorById);

router.post('/', createAuthor);

router.put('/:id', updateAuthor);

router.delete('/:id', deleteAuthor);

module.exports = router;
