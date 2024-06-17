const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to ${con.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
