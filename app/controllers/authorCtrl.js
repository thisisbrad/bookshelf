const Author = require("../models/Author");
const mongoose = require("mongoose");

const getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json({
    data: authors,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const getAuthorById = async (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    data: author,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const createAuthor = async (req, res) => {
  try {
    const { author } = req.body;
    const newAuthor = await Author.create(author);
    res.status(201).json({
      data: newAuthor,
      status: "success",
      message: `${req.method} - Author request made`,
    });
  } catch (error) {
    console.error(error);
    // Check if the error is a Mongoose validation error or a duplicate key error
    if (error instanceof mongoose.Error.ValidationError) {
      const validationErrors = Object.values(error.errors).map(
        (error) => error.message
      );
      console.log("Validation errors:", validationErrors);
      res.status(422).json({
        success: false,
        error: "Validation failed",
        details: validationErrors,
      });
    }
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: error.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    data: author,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  await Author.findByIdAndDelete(id);
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
