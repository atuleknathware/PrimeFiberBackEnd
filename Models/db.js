import mongoose from 'mongoose';
import dotenv from 'dotenv';

// If you're using dotenv to manage environment variables, make sure it's configured correctly.
dotenv.config();

const mongoUrl = process.env.mongoConnect || "mongodb+srv://atulware22:2NhABYGf0H3KLyab@cluster0.li5ci.mongodb.net/PrimeFiber";  // Use your MongoDB URL here

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;  // Re-throw to handle it in the calling code
  }
};

export default connectDB;
