const mongoose =require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
  description: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
