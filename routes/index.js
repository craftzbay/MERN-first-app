const router = require('express').Router();
const bookRoutes = require('./book');

router.use('/api/book', bookRoutes);

module.exports = router