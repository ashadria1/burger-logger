const express = require('express');
const exphbs = require('express-handlebars');
const burgerRouter = require('./controllers/burger-loggers_controller');

const PORT = process.env.PORT || 8080;

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use(burgerRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
