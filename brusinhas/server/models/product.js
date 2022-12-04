const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeSchema = new Schema({
  size: String,
  quantity: Number,
});

const modelSchema = new Schema({
  type: String,
  sizes: [sizeSchema],
});

// Define schema for /products
const productSchema = new Schema({
  id: Number,
  name: String,
  src: String,
  description: String,
  category: [String],
  price: String,
  models: [modelSchema],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
