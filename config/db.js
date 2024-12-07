const mongoose = require('mongoose');

// MongoDB connection string
const DB_URI = 'mongodb://localhost:27017/clinic_db';

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

module.exports = connectDB;
