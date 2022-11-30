const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define schema for /products
const productSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  price: String,
  models: [
    {
      type: String,
      sizes: [
        {
          size: String,
          quantity: Number,
        },
      ],
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
