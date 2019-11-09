const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./database.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'));

app.post('/search', (req, res) => {
		db.query('SELECT * FROM searches WHERE tag = ? OR location = ?',
		[req.body.searchTerm, req.body.searchTerm], (err, results) => {
			if(err){
				console.log(err);
				res.send([]);
			}
			console.log(results);
			res.send(results);
		});
});

module.exports = app;
