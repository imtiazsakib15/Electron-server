const Product = require("../../models/productModel");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).select(
      "name  slug  image  price oldPrice  description  category  availability"
    );
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

module.exports = { getProducts, getProduct, createProduct };
