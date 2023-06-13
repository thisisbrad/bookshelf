const getAuthors = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Author request made` });
};

const getAuthorById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const createAuthor = (req, res) => {
  const { author } = req.body;
  res.status(200).json({
    data: author,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const updateAuthor = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - Author request made`,
  });
};

const deleteAuthor = (req, res) => {
  const { id } = req.params;
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
