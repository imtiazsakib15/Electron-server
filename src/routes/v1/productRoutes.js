const {
  getProducts,
  createProduct,
} = require("../../controllers/v1/productController");

const router = require("express").Router();

router.get("/", getProducts);

router.post("/", createProduct);

module.exports = router;
