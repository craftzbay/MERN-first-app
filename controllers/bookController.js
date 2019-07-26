const book = require('../models/book')
module.exports = {
   getAll: (req, res) => {
      book.find(req.query)
         .then(book => res.json(book))
         .catch(err => res.status(422).json(err));
   },
   getById: (req, res) => {
      book.findById(req.params.id)
         .then(book => res.json(book))
         .catch(err => res.status(422).json(err))
   },
   create: (req, res) => {
      book.create(req.body)
         .then(newbook => res.json(newbook))
         .catch(err => res.status(422).json(err))
   },
   update: (req, res) => {
      book.findOneAndUpdate({ _id: req.params.id }, req.body)
         .then(book => res.json(book))
         .catch(err => res.status(422).json(err))
   },
   delete: (req, res) => {
      book.findById({ _id: req.params.id }, req.body)
         .then(book => book.remove())
         .then(allbooks => res.json(allbooks))
         .catch(err => res.status(422).json(err))
   }
}