

db.query('SELECT * FROM watches', (error, results) => {
  if (error) {
    console.error('Error executing query:', error.stack);t
    return;
  }
  console.log(results.rows); 




// CREATE TABLE stories (
//     ID SERIAL PRIMARY KEY,
//     Watch_ID integer NOT NULL,
//     Story_Text text NOT NULL,
//     Date_Created timestamp without time zone NOT NULL DEFAULT NOW()
// );