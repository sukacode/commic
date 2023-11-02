const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const productRoutes = require("./product.routes");
const sellerRoutes = require("./seller.routes");

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/seller", sellerRoutes);

module.exports = router;
