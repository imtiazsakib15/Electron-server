const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      ref: "Category",
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
