const Category = require("../../models/categoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).select("name slug image");
    res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const category = (await Category.findOne({ slug })) || {};
    res.status(200).send(category);
  } catch (error) {
    next(error);
  }
};

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

module.exports = { getCategories, getCategory, createCategory };
