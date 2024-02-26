const { createCategory } = require("../../controllers/v1/categoryController");

const router = require("express").Router();

router.post("/", createCategory);

module.exports = router;
