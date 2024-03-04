const { createProduct } = require("../../controllers/v1/productController");

const router = require("express").Router();

router.post("/", createProduct);

module.exports = router;
