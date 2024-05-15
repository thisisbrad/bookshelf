const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

const authors = [
  {
    id: "a8b99afd-3e4f-4ea9-9702-ec480624a5b5",
    name: "Bob",
    age: 34,
    Description: "writes books",
  },
  {
    id: "eda9f362-50c5-447c-8abc-1e2fdf8b7aea",
    name: "Tom",
    age: 34,
    Description: "writes books",
  },
];
//localhost:3000/api/v1/author/
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: authors,
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: req.params.id,
  });
});

router.post("/", (req, res) => {
  console.log("request", req.body);
  const author = { id: uuidv4(), ...req.body };
  authors.push(author);
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: authors[authors.length - 1],
  });
});

router.put("/:id", (req, res) => {
  // update the author
  res
    .status(200)
    .json({ success: true, message: `${req.method} - Author request` });
});

router.delete("/:id", (req, res) => {
  //delete the author
  res.status(200).json({
    success: true,
    message: `${req.method} - Author request`,
    data: req.params.id,
  });
});

module.exports = router;
