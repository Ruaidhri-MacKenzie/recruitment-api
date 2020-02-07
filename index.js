const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoutes);

mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds215219.mlab.com:15219/recruitment`, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
