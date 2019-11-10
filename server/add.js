const express = require('express');
const router = express.Router();
const db = require('./database.js');

router.post('/', (req, res) => {
	if(!req.user){
		res.status(404).end();
		return;
	}
	console.log(req.user);
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
				let parsedResults = results.map(result => {
					let newResult = {
						email: result.email,
						fullName: result.fullName,
					}
					return newResult;
				});
				res.send({ status: 200, results: parsedResults });

			}
			else {
				res.send({ status: 200 })
			}
			db.query(insert_query, [req.user.id, req.body.searchTerm.toLowerCase(), req.body.location.toLowerCase(), Math.floor(req.body.date/1000)], (err, results) => {
				if (err) {
					console.error(err);
				}
			});
		})
})



module.exports = router;