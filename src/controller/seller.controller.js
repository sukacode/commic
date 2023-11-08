const sellerModel = require("../model/seller.model");
const response = require("../helper/response.helper");

const sellerController = {
  getAll: async (req, res, next) => {
    try {
        console.log(this.getAll)
      const { rows: seller } = await sellerModel.getAll();
      response(res, seller, 200, "Get data success");
    } catch (err) {
      console.log(err);
      response(res, "", 500, `${err}`);
    }
  },
  insert: async (req, res, next) => {
    try {
      const { first_name, no_identity } = req.body;
      const data = {
        first_name,
        no_identity,
        address
      };
      console.log(data);
      await sellerModel.create(data);
      response(res, data, 200, "create data seller success");
    } catch (err) {
      console.log(err);
      next(new createError.InternalServerError());
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
        rows: [seller],
      } = await sellerModel.getDetail(id);
      response(res, seller, 200, "Get Data Detail success");
    } catch (err) {
      console.log(err);
      next(new createError.InternalServerError());
    }
  },
  update: async (req, res, next) => {
    try {
      const { id,first_name, no_identity } = req.body;
      const data = {
        id,
        first_name,
        no_identity,
      };

      await sellerModel.update(data);
      const {
        rows: [seller],
      } = await sellerModel.getDetail(id);
      response(res, seller, 200, "Update seller success");
    } catch (err) {
      console.log(err);
      next(new createError.InternalServerError());
    }
  },
  deleted: async (req, res, next) => {
    try {
      const { id } = req.params;
      await sellerModel.delete(id);
      res.json({
        msg: "delete berhasil",
      });
    } catch (err) {
      console.log(err);
      next(new createError.InternalServerError());
    }
  },
};

module.exports = sellerController;
