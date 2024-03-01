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

const updateCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const { name } = req.body;
    const filter = { slug };
    const update = {
      $set: { name, slug: name.toLowerCase().split(" ").join("-") },
    };

    const result = await Category.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const result = await Category.deleteOne({ slug });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
