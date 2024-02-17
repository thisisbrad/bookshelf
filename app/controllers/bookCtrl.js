const Book = require("../models/Book");
const Author = require("../models/Author");

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
    const book = await Book.findById(id).populate("author");

    if (!book) {
      return res
        .status(400)
        .json({ success: false, message: "Book not found" });
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
    // const bookData = await Book.create(book);
    const { book } = req.body;
    // book.author > is the _id for the author model;
    // '648a0bcb7124454bedaa5b97' > is the _id for the author model;
    const user = await Author.findById(book.author);
    // attaching the actual author object to the book
    book.author = user;
    // creates a new book model
    const bookData = new Book(book);
    // push the book id to the user.books array
    user.books.push(bookData._id);
    // saves the book and user data
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
