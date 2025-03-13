const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ✅ Add product to cart
router.post("/add", async (req, res) => {
    console.log("Incoming Cart Data:", req.body); // ✅ Debug request data
    
    const { userId, productId, quantity } = req.body;
  
    if (!userId || !productId) {
      console.log("❌ Missing userId or productId");
      return res.status(400).json({ success: false, message: "Missing user or product data." });
    }
  
    try {
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
  
      const existingItem = cart.items.find(item => item.productId.toString() === productId);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
  
      await cart.save();
      console.log("✅ Cart Saved:", cart); // ✅ Check if data is saved
  
      res.json({ success: true, cart });
    } catch (error) {
      console.error("❌ Error saving cart:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  });
  
module.exports = router;
