

db.query('SELECT * FROM watches', (error, results) => {
  if (error) {
    console.error('Error executing query:', error.stack);t
    return;
  }
  console.log(results.rows); 




/