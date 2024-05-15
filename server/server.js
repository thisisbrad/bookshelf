const app = require("./app");
require("dotenv").config();
const connectDB = require("../server/app/db/config");

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
