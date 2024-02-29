const express = require('express');
const router = express.Router();
const authorRoutes = require('./authorRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);

module.exports = router;
