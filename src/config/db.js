const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres", //user prod : seller , user vm : postgres
  host: "10.8.135.107", //host prod : db , host vm : 10.8.135.107
  database: "dbseller", 
  password: "secret", //pass prod : P@ssw0rd
  port: 5432
});

module.exports = pool;