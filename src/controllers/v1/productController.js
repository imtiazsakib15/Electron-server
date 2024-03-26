const Product = require("../../models/productModel");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params?.id;
    const product = (await Product.findById(id)) || {};
    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    const { name } = product;

    const slug = name.toLowerCase().split(" ").join("-");

    const result = await Product.create({ ...product, slug });
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params?.id;
    const {
      name,
      image,
      price,
      oldPrice,
      description,
      category,
      availability,
    } = req.body;

    const slug = name.toLowerCase().split(" ").join("-");
    const update = {
      $set: {
        name,
        slug,
        image,
        price,
        oldPrice,
        description,
        category,
        availability,
      },
    };

    const result = await Product.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params?.id;
    const result = await Product.findByIdAndDelete(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
