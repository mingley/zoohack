const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const searchRouter = require('./add.js');
console.log(searchRouter);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'));

app.use('/add', searchRouter);

module.exports = app;