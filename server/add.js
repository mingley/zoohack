const express = require('express');
const router = express.Router();
const db = require('./database.js');

router.post('/', (req, res) => {

	const insert_query = `INSERT INTO searches ( tag, location, expiration) VALUES(?, ?, ?)`
	db.query(`SELECT * FROM searches 
		INNER JOIN searches.userID ON logins.id
		WHERE tag = ? OR location = ?`,
		[req.body.searchTerm, req.body.location],
		(err, results) => {
			if (err) {
				console.log(err);
				res.send({ status: 500, results: [] });
			}
			if (results.length > 0) {
				console.log('SEARCH SUCCESSFUL')
				console.log(results)
				res.send({ status: 200, results: results });
			}
			else {
				res.send({ status: 200 })
				console.log('results array if no results from search ===>', results)
			}
			db.query(insert_query, [req.body.searchTerm, req.body.location, req.query.date], (err, results) => {
				if (err) {
					console.error(err);
				}
				else {
					console.log('INPUT SUCCESSFUL')
				}
			}
			);

		})
})

module.exports = router;