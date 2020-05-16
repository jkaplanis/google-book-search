const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // url for thumbnail image of the book
  image: {
    type: String,
    required: true
  },
  // link (url) to book info page in Google Books Api
  link: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: true,
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
