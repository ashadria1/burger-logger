// setup the code to connect Node to MySQL.  

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
  console.log('Successfully connected to DB!  Open http://localhost:8080/ in your favorite browser to see the magic!');
});

// Export the connection.

module.exports = connection;
