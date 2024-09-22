import 'dotenv/config';
import express from 'express';
import mongoose from "mongoose";

import { DB_NAME } from '../constants.js';



const app = express();
const PORT = process.env.PORT || 3000;

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log('MongoDB connected');

    app.on('error', (err) => {
      throw new Error('@@Express error', err);
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  }
  catch (err) {
    throw new Error('@@MongoDB connection error', err);
  }
};

export default connectDb;