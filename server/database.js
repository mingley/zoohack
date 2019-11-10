const mysql = require('mysql');
const pool  = mysql.createPool({
	connectionLimit: 5,
	host: process.env.DATABASE_IP_ADDRESS,
	user     : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : 'wildflag'
})

const cleanse_query = `DELETE FROM searches WHERE expiration < ?`

setInterval(
cleanse
, 1000 * 60 * 60);

function cleanse(){
	console.log('working');
	console.log(Date.now())
	pool.query(cleanse_query,[Date.now()], (err, results) => {
	if (err) {
		console.error(err);
	}
	else {
		console.log(results)
	}
}
);
}

setTimeout(cleanse, 9000);
module.exports = pool;
