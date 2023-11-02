const express = require("express");
const {
    getAll,
    insert,
    update,
    getDetail,
    deleted
} = require("../controller/seller.controller");
const router = express.Router();

router
    //dataseller
    .get("/all", getAll)
    .get("/all/:id", getDetail)
    .post('/insert', insert)
    .put('/update', update)
    .delete("/delete/:id", deleted);
    
module.exports = router;