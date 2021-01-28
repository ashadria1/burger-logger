/* * Inside `burger-logger.js`, import `orm.js` into `burger-logger.js` */

const orm = require('../config/orm');

// Create a burger...

async function createBurger(burgerName) {
  const newBurger = {
    burger_name: burgerName,
    devoured: false,
  };
  const result = await orm.insertOne('burgers', newBurger);
  return result;
}

// Update a burger...

async function updateBurger(id) {
  const result = await orm.updateOne('burgers', { devoured: true }, id);
  return result;
}

// View burgers...

async function viewBurgers() {
  const burgers = await orm.selectAll('burgers');
  return burgers;
}

// Export...

module.exports = {
  createBurger,
  updateBurger,
  viewBurgers,
};
