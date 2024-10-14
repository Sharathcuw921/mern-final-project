const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/players'); // Importing player routes

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Use player routes
app.use('/api/players', players); // Linking the routes to /api/players

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/PlayerDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));
