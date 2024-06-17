const Author = require("../models/Author");

const getAuthors = async (req, res) => {
  const authors = await Author.find({});
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: authors,
  });
};

const getAuthorById = (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: req.params.id,
  });
};

const createAuthor = async (req, res) => {
  // console.log("incoming Author", req.body);
  try {
    console.log("incoming Author", req.body.author);
    const { author } = req.body;
    const newAuthor = await Author.create(author);
    console.log("from DB", newAuthor);
    res.status(200).json({
      success: true,
      message: `${req.method} - Author request`,
      data: req.body.author,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `${req.method} - Author request`,
      data: req.body.author,
    });
  }
};

const updateAuthor = (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: req.params.id,
  });
};

const deleteAuthor = (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: `${req.method} - Author request from controller!`,
    data: req.params.id,
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
