const {
  getProducts,
  getProduct,
  createProduct,
} = require("../../controllers/v1/productController");

const router = require("express").Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

module.exports = router;
