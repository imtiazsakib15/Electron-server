const Category = require("../../models/categoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).send(categories);
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const id = req.params?.id;
    const category = (await Category.findById(id)) || {};
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
    const id = req.params?.id;
    const { name, image } = req.body;

    const slug = name.toLowerCase().split(" ").join("-");
    const update = {
      $set: { name, slug, image },
    };

    const result = await Category.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params?.id;
    const result = await Category.findByIdAndDelete(id);
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
