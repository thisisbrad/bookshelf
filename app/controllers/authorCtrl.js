const Author = require("../models/Author");

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
    res.status(200).json({
      data: newAuthor,
      status: "success",
      message: `${req.method} - Author request made`,
    });
  } catch ({ message }) {
    res.status(400).json({
      status: "fail",
      message,
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
