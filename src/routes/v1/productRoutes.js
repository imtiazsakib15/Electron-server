const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} = require("../../controllers/v1/productController");

const router = require("express").Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
