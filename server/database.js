const mysql = require('mysql');
const pool  = mysql.createPool({
	connectionLimit: 5,
	host: process.env.DATABASE_IP_ADDRESS,
	user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : 'wildflag'
})

module.exports = pool;
