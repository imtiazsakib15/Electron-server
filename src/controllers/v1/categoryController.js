const Category = require("../../models/categoryModel");

const createCategory = async (req, res, next) => {
  try {
    const { name, image } = req.body;
    const slug = name.toLowerCase().split(" ").join("-");

    const result = await Category.create({ name, slug, image });
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCategory };
