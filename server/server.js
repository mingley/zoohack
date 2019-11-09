const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

app.use(express.static('dist'));

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM flagged';

const connection = mysql.createConnection({
    host: 'hostaddressherejosh',
    user: 'username',
    password: 'password?',
    database: 'hackathonDBname'
})

// connection.connect(err => {
//     if(err){
//         console.log(err);
//         return err;
//     }
// });

app.get('/api', (req, res) => {
    res.send('backend is working')
});

module.exports = app;
