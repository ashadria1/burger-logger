// setup the code to connect Node to MySQL.  Export the connection.

const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0rn@ment0",
    database: "burgers_db"
  });
  }

connection.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected to DB!');
});

module.exports = connection;
