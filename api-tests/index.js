const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/players'); // Importing player routes

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use('/api/players', players); // Linking the routes to /api/players

// Simple route to test server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/express-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after MongoDB connection is successful
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('MongoDB connection failed', err));
