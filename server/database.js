const mysql = require('mysql');
const pool  = mysql.createPool({
	connectionLimit: 5,
	host: process.env.DATABASE_IP_ADDRESS,
	user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : 'wildflag'
})

const cleanse_query = `DELETE FROM searches WHERE expiration < (UNIX_TIMESTAMP());`

setInterval(
	function(){
		pool.query(cleanse_query, (err, results) => {
		if (err) {
			console.error(err);
		}
		else {
			console.log('expired entries removed')
		}
}
);
}, 1000 * 60 * 60);

function cleanse(){
	console.log('working');
	pool.query(cleanse_query, (err, results) => {
	if (err) {
		console.error(err);
	}
	else {
		console.log('expired entries removed')
	}
}
);
}

cleanse();
module.exports = pool;
