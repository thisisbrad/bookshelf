const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connection to ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
