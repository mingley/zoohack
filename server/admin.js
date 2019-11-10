const express = require('express');
const router = express.Router();
const db = require('./database.js');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
	if(!req.user || !req.user.isAdmin){
		res.status(404).end();
		return;
	}

	bcrypt.hash(req.body.password, 10, (err, hash) => {
		if(hash){
			db.query('INSERT INTO logins (email, password, fullName, isAdmin) VALUES (?,?,?,?)', 
			[req.body.username, hash, req.body.fullName, req.body.isAdmin], (err, results) => {
				if(err){
					console.log(err);
					res.send({status: 500});
				} else {
					res.send({status: 200});
				}
			})
		} else {
			res.send({status: 500});
		}
	})
})

module.exports = router;