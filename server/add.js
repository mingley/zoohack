const express = require('express');
const router = express.Router();
const db = require('./database.js');

router.post('/', (req, res) => {
	const insert_query = `INSERT INTO searches (userID, tag, location, expiration) VALUES(?, ?, ?, ?)`

	db.query(`SELECT * FROM searches 
		INNER JOIN logins ON searches.userID = logins.id
		WHERE tag = ? AND location = ?`,
		[req.body.searchTerm.toLowerCase(), req.body.location.toLowerCase()],
		(err, results) => {
			if (err) {
				console.log(err);
				res.send({ status: 500, results: [] });
			}
			if (results.length > 0) {
				res.send({ status: 200, results: results });
			}
			else {
				res.send({ status: 200 })
			}
			db.query(insert_query, [req.user.id, req.body.searchTerm.toLowerCase(), req.body.location.toLowerCase(), Math.floor(req.body.date/1000)], (err, results) => {
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