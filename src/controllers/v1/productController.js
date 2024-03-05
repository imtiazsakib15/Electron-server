const Product = require("../../models/productModel");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).select(
      "name  slug  image  price  description  category  availability"
    );
    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { name, image, price, description, category, availability } =
      req.body;
    const slug = name.toLowerCase().split(" ").join("-");

    const result = await Product.create({
      name,
      slug,
      image,
      price,
      description,
      category,
      availability,
    });
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, createProduct };
