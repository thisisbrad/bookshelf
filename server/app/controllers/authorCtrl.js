const Author = require("../models/Author");

const getAuthors = async (req, res) => {
  // console.log("WOW");
  try {
    const authors = await Author.find();
    // console.log("authors",authors[0])
    res.status(200).json({
      data: authors,
      success: true,
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { books } = req.query;
    let author;
    if (books === "true") {
      author = await Author.findById(id).populate("books");
    } else {
      author = await Author.findById(id);
    }
    console.log(">>>", author);
    if (!author) {
      return res
        .status(400)
        .json({ success: false, message: "Author not found" });
    }

    res.status(200).json({
      data: author,
      success: true,
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { author } = req.body;
    const authorData = await Author.create(author);
    res.status(201).json({
      data: authorData,
      success: true,
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!author) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({
      data: author,
      success: true,
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    await Author.findByIdAndDelete(id);
    res.status(200).json({
      id,
      success: true,
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(500).json({
      message,
      success: false,
    });
  }
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
