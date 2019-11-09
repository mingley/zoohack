const express = require('express');
const bodyParser = require('body-parser')
const searchRouter = require('./add.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'));

app.use('/add', searchRouter);

module.exports = app;