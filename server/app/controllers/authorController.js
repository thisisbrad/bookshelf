const Author = require("../models/Author");

const getAllAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: authors,
  });
};

const getAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: author,
  });
};

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    console.log("saved >>>", author);
    res.status(200).json({
      success: true,
      message: `${req.method} - Author request`,
    });
  } catch (error) {
    console.log(">>>", error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
  });
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
};
