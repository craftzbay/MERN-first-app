const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   author: {
      type: String,
      required: true
   },
   price: {
      type: Int16Array,
      required: true
   },
   published: {
      type: String
   }
})

const book = mongoose.model('book', bookSchema)
module.exports = book