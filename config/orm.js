/* * Import (require) `connection.js` into `orm.js` */
const connection = require("./connection");

/* create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.


const connection = require('./connection');

function selectAll(table) {
  return new Promise((resolve, reject) => {
    connection.query('select * from ??', table, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function insertOne(table, values) {
  return new Promise((resolve, reject) => {
    connection.query('insert into ?? set ?', [table, values], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateOne(table, values, id) {
  return new Promise((resolve, reject) => {
    connection.query('update ?? set ? where id = ?', [table, values, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  selectAll,
  insertOne,
  updateOne,
};


 */