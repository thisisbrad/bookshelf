const Book = require('../models/Book');
const Author = require('../models/Author');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      data: books,
      success: true,
      message: `${req.method} - Book request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate('author');

    if (!book) {
      return res
        .status(400)
        .json({ success: false, message: 'Book not found' });
    }

    res.status(200).json({
      data: book,
      success: true,
      message: `${req.method} - Book request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const { book } = req.body;
    // const bookData = await Book.create(book);
    const user = await Author.findById(book.author);
    book.author = user;
    const bookData = new Book(book);
    user.books.push(bookData._id);

    const queries = [bookData.save(), user.save()];
    await Promise.all(queries);

    // const { author, ...bookOnly } = bookData._doc;
    // console.log('>>>', bookOnly);

    res.status(200).json({
      data: bookData,
      success: true,
      message: `${req.method} - Book request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      data: book,
      success: true,
      message: `${req.method} - Book request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      id,
      success: true,
      message: `${req.method} - Book request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      message,
      success: false,
    });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
