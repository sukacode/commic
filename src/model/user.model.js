const pool = require("../config/db");

const userModel = {
  // auth
  register: (data) => {
    return pool.query(
      `
            INSERT INTO users (id, first_name,no_identity)
            VALUES ($1, $2, $3, $4)
            `,
      [data.id, data.first_name, data.no_identity]
    );
  },
  // get all user
  userAll: () => {
    return pool.query(`SELECT * FROM seller`);
  },

  // get user detail
  userDetail: (id) => {
    return pool.query(`SELECT * FROM seller where id = $1`, [id]);
  },

  // emailCheck: (email) => {
  //   return pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
  // },

  //update user
  updateSeller: (data) => {
    return pool.query(
      `
    UPDATE seller SET
    first_name = COALESCE($1, fisrt_name),
    no_identity = COALESCE($2, np_identity),
    WHERE id = $3
    `,
      [data.first_name, data.no_identity,data.id]
    );
  },

  //delete
  removed: (id) => {
    return pool.query(`DELETE FROM users WHERE id = $1`, [id]);
  },
};

module.exports = userModel;
