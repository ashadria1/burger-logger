const express = require("express");

/* const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const burgerRouter = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burgers_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected to db!');
});

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
@@ -27,9 +14,7 @@ app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {});
});
app.use(burgerRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`); */
