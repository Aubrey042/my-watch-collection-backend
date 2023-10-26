const db = require('./db');

db.query('SELECT * FROM watches;', [], (error, results) => {
  if (error) {
    throw error;
  }
  console.log(results.rows);
});
