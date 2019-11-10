const express = require('express');
const router = express.Router();
const db = require('./database.js');


//'SELECT * FROM searches WHERE tag = ? OR location = ?'

router.post('/', (req, res) => {
	console.log(req.body)
	const insert_query = `INSERT INTO searches ( tag, location, expiration) VALUES(tag = ?, location = ?, expiration = ?)`
	
	db.query('SELECT * FROM searches WHERE tag = ? OR location = ?',
	[req.body.searchTerm, req.body.location],
	 (err, results) => {
		if(err){
			console.log(err);
			res.send({status: 500, results: []});
		}
		if(results.length > 0){
			console.log('SEARCH SUCCESSFUL')
			console.log(results)
			res.send({status: 200, results: results});
		} else {
			console.log('this is not good ===>', results)
			}
		}
	);
	db.query(insert_query, [req.body.searchTerm, req.body.location, req.body.date, ], (err, results) => {
		if(err){
			res.send(err);
		}
		else{(res.send({status: 200, results: results}))
		console.log('INPUT SUCCESSFUL')
	}
})
})

module.exports = router;