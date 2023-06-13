const express = require('express');
const router = express.Router();
const authorRoutes = require('./authorRoutes');

router.use('/authors', authorRoutes);

module.exports = router;
