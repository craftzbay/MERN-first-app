const router = require('express').Router();
const bookController = require('../controllers/bookController');
router
   .route('/')
   .get(bookController.getAll)
   .post(bookController.create)

router
   .route('/:id')
   .get(bookController.getById)
   .put(bookController.update)
   .delete(bookController.delete)

module.exports = router;