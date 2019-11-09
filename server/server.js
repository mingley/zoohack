const express = require('express');
const bodyParser = require('body-parser')
const searchRouter = require('./add.js');
const app = express();
const db = require('./database.js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'));

// app.use('/add', searchRouter);
app.post('/add', (req, res) => {
	console.log(req.body)
	const insert_query = `INSERT INTO searches ( tag, location, expiration) VALUES(tag = ?, location = ?, expiration = ?)`
	db.query('SELECT * FROM searches WHERE tag = ? OR location = ?',
	[req.body.searchTerm, req.body.location], (err, results) => {
		if(err){
			console.log(err);
			res.send({status: 500, results: []});
		}
		if(results.length > 0){
			console.log('SEARCH SUCCESSFUL')
			res.send({status: 200, results: results});
		} else {
			//req.body.userId
			db.query(insert_query, [req.body.searchTerm, req.body.location, req.body.date, ], (err, results) => {
				if(err){
					res.send(err);
				}
				else(res.send({status: 200, results: 'entry added'}))
				console.log('INPUT SUCCESSFUL')
			})
		}
	});
})

module.exports = app;