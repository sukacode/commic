const { Pool } = require("pg");
const pool = new Pool({
  user: "seller",
  host: "db",
  database: "dbseller",
  password: "P@ssw0rd",
  port: 5432
});

module.exports = pool;