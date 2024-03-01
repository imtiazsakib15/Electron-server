const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/v1/categoryController");

const router = require("express").Router();

router.get("/", getCategories);

router.get("/:slug", getCategory);

router.post("/", createCategory);

router.put("/:slug", updateCategory);

router.delete("/:slug", deleteCategory);

module.exports = router;
