const {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
} = require("../../controllers/v1/categoryController");

const router = require("express").Router();

router.get("/", getCategories);

router.get("/:slug", getCategory);

router.post("/", createCategory);

router.delete("/:slug", deleteCategory);

module.exports = router;
