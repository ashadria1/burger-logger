/* * Import (require) `connection.js` into `orm.js` */

/* create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.
 */

const connection = require('./connection');

// Select all...

function selectAll(table) {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ??', table, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Insert one...

function insertOne(table, values) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO ?? SET ?', [table, values], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Update one...

function updateOne(table, values, id) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE ?? SET ? WHERE id = ?', [table, values, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Export the ORM object in `module.exports`...

module.exports = {
  selectAll,
  insertOne,
  updateOne,
};
