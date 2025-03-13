const express = require("express");
const Product =require( "../models/Product.js"); 

const router = express.Router();

// ✅ Route to Add Products
router.post("/add", async (req, res) => {
  try {
    const { name, price, image, category, stock, description } = req.body;

    const newProduct = new Product({
      name,
      price,
      image,
      category,
      stock,
      description
    });

    await newProduct.save();
    res.status(201).json({ success: true, message: "Product added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to add product", error: error.message });
  }
});

// ✅ Route to Get All Products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
});

module.exports = router;
