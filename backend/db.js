const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/Movie';

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}

module.exports = connectToMongo;
