const express = require('express');
const router = express.Router();
const db = require('./database.js');

router.post('./add', (req, res) => {
	db.query('SELECT * FROM searches WHERE tag = ? OR location = ?',
	[req.body.searchTerm, req.body.searchTerm], (err, results) => {
		if(err){
			console.log(err);
			res.send({status: 500, results: []});
		}
		if(results.length > 0){
			res.send({status: 200, results: results});
		} else {
			//add new search, need user info first
			res.send({status: 200});
		}
	});
})

module.exports = router;