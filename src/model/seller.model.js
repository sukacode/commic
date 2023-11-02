const pool = require("../config/db");

const sellerModel = {
  getAll: () => {
    return pool.query(`SELECT * FROM seller`);
  },
  create: (data) => {
    return pool.query(
      `
      INSERT INTO seller (first_name, no_identity) VALUES ($1, $2)
        `,
      [
        data.first_name,
        data.no_identity
      ]
    );
  },
  getDetail: (id) => {
    return pool.query(`SELECT * FROM seller WHERE id = $1`, [id]);
  },
  update: (data) => {
    return pool.query(
      `
    UPDATE seller SET
    first_name = $1,  
    no_identity = $2
    WHERE id = $3
    `,
      [
        data.first_name,
        data.no_identity,
        data.id,
      ]
    );
  },
  delete: (id) => {
    return pool.query(`DELETE FROM seller WHERE id = $1`, [id]);
  },
};

module.exports = sellerModel;