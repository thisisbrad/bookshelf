const dotenv = require("dotenv").config();
const connectDB = require("./app/db/config");
const app = require("./app");

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3000;
console.log("process.env.PORT", process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
