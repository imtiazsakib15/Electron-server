const {
  getCategories,
  createCategory,
} = require("../../controllers/v1/categoryController");

const router = require("express").Router();

router.get("/", getCategories);

router.post("/", createCategory);

module.exports = router;
