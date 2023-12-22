const mongoose = require('mongoose');
const MONGO_URI= 'mongodb://127.0.0.1:27017/notes-application';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};



module.exports = connectDB;
