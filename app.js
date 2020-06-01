const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const auth = require('./routes/auth');
var cors = require('cors')
var app = express()

app.use(cors())
 
mongoose.connect('mongodb+srv://mostafazezo1996:zNNGutAGsX3QWKqa@cluster0-zpuvs.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));