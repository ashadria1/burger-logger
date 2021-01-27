/* 

setup the code to connect Node to MySQL

* Export the connection.. 

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgers_db',
});
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection('mysql://root@localhost:3306/burgers_db');
}


*/