/* 

setup the code to connect Node to MySQL

* Export the connection.. 

const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection('mysql://root@localhost:3306/burgers_db');
}

connection.connect((err) => {
  if (err) throw err;
  console.log('connected to db!');
});

module.exports = connection;


*/