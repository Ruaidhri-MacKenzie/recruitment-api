// NPM packages - express helps create a HTTP server with routing, mongoose helps interact with MongoDB
const express = require('express');
const mongoose = require('mongoose');

// Routers - handle HTTP requests for different paths
const userRoutes = require('./routes/userRoutes.js');
const postRoutes = require('./routes/postRoutes.js');

// Environment variables
const { PORT, MONGO_USER, MONGO_PASS } = process.env;

// Create HTTP server
const app = express();

// Parse requests to reveal req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Assign a path for each router
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// Connect to database
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@ds215219.mlab.com:15219/recruitment`, { useNewUrlParser: true, useUnifiedTopology: true });

// Start server listening for requests
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
