const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mysql = require('mysql');


require('dotenv').config()

const app = express();

app.use(cors());
app.get('/api');
app.use(express.static('dist'));

const DECONFLICTION_QUERY = 'SELECT * FROM targets';

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

app.get('/search', (req, res) => {
    res.send('backend is working')
});

app.get('/update', (req, res) => {
    const { targetName, isFlagged} = req.query;
    const INSERT_FLAGGED_QUERY = `INSERT INTO targets ( targetName, isFlagged) VALUES('${targetName}', ${isFlagged})` //targetname has '' for string type and isflagged does not for boolean type
    connection.query(INSERT_FLAGGED_QUERY, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.send('success')
        }
    })
    console.log(name, price);
    res.send('entry added'); 
})
  

module.exports = app;
