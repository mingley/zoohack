const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static('dist'));

app.get('/api', (req, res) => {
    res.send('backend is working')
});

module.exports = app;
