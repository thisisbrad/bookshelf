const app = require("./app");
require("dotenv").config();
const connectDB = require("./app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
