const express = require('express');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const passport = require('passport');
const localStrategy = require('passport-local');

const searchRouter = require('./add.js');
const app = express();
const db = require('./database.js');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieParser());
app.use(cookieSession({ secret: process.env.COOKIE_SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('dist'));

app.use('/add', searchRouter);

app.post('/login', passport.authenticate('local'), (req, res) => {
	res.send({status: 'success'});
})

passport.use(new localStrategy(
  function(username, password, done) {
		//We need to do a compare whether or not we have this username.
		//This is so that we don't share any info about accounts
		//(e.g., server responds faster if account doesn't exist)
		const saltRounds = 10;

		db.query('SELECT * FROM logins WHERE email = ? LIMIT 1', [username], (err, results) => {
			if(err){
				console.log(err);
				return done(err);
			} else {
				let user = {password: ''};
				if(results.length === 1){
					user = results[0];
				}
				bcrypt.compare(password, user.password, (err, res) => {
					if(res){
						done(null, user);
					} else {
						done(null, false);
					}
				})
			}
		})
  }
));

passport.serializeUser(function (user, done) {
	let newUser = {
		id: user.id,
		isAdmin: user.isAdmin,
		fullName: user.fullName
	}
	done(null, newUser);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

module.exports = app;