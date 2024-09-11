const Author = require("../models/Author");

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});
    res.status(200).json({
      success: true,
      data: authors,
      messsage: `${req.method} - Request made to Author API`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      messsage: `${req.method} - Request made to Author API`,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    //   console.log(req.body.author);
    const author = await Author.create(req.body.author);
    res.status(201).json({
      success: true,
      data: author,
      messsage: `${req.method} - Request made to Author API`,
    });
  } catch (error) {
    console.log(error.messsage);
    res.status(400).json({
      success: false,
      error: error.message,
      messsage: `${req.method} - Request made to Author API`,
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await Author.findById(id);
    console.log("id >>>", id);
    res.status(200).json({
      success: true,
      data: author,
      messsage: `${req.method} - Request made to Author API`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      messsage: `${req.method} - Request made to Author API`,
    });
  }
};
const updateAuthor = (req, res) => {
  const { id } = req.params;
  console.log("id >>>", id);
  res.status(200).json({
    success: true,
    id,
    messsage: `${req.method} - Request made to Author API`,
  });
};
const deleteAuthor = (req, res) => {
  const id = req.params.id;
  console.log("id >>>", id);
  res.status(200).json({
    success: true,
    id: id,
    messsage: `${req.method} - Request made to Author API`,
  });
};

module.exports = {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
