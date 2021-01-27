/* * Inside `burger-logger.js`, import `orm.js` into `burger-logger.js` */

const orm = require("./orm");

/* 
* Also inside `burger-logger.js`, create the code that will call the ORM functions using burger-logger specific input for the ORM.

* Export at the end of the `burger-logger.js` file.

const orm = require('../config/orm');

async function createBurger(burgerName) {
  const newBurger = {
    burger_name: burgerName,
    devoured: false,
  };

  const result = await orm.insertOne('burgers', newBurger);
  return result;
}

async function updateBurger(id) {
  const result = await orm.updateOne('burgers', { devoured: true }, id);
  return result;
}

async function viewBurgers() {
  const burgers = await orm.selectAll('burgers');
  return burgers;
}

module.exports = {
  createBurger,
  updateBurger,
  viewBurgers,
};

 */