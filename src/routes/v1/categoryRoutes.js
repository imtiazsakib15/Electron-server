const {
  getCategories,
  getCategory,
  createCategory,
} = require("../../controllers/v1/categoryController");

const router = require("express").Router();

router.get("/", getCategories);

router.get("/:slug", getCategory);

router.post("/", createCategory);

module.exports = router;
