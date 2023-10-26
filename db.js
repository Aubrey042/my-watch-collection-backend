const { Pool } = require('pg');

const pool = new Pool({
  user: 'aubreylittle',
  host: 'localhost',
  database: 'WatchCollectionDB',
  password: 'Zondaf101@$',
  port: 5433,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
