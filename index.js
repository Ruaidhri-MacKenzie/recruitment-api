const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys.js');

const userRoutes = require('./routes/userRoutes.js');

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoutes);

mongoose.connect(`mongodb://${keys.mongo.user}:${keys.mongo.pass}@ds215219.mlab.com:15219/recruitment`, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
