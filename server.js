const app = require("./app");
const dotenv = require("dotenv").config();
const connectDB = require("./app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
