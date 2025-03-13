const express = require("express");
const Wishlist = require("../models/Wishlist");
const router = express.Router();

// ✅ Get Wishlist for User
router.get("/", async (req, res) => {
  try {
    const wishlist = await Wishlist.find(); // Add filtering if needed
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wishlist" });
  }
});

// ✅ Add Item to Wishlist
router.post("/add", async (req, res) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    return res.status(400).json({ message: "Invalid userId or productId" });
  }

  try {
    const wishlistItem = new Wishlist({ userId, productId });
    await wishlistItem.save();
    res.status(201).json({ message: "Added to wishlist", wishlistItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to wishlist" });
  }
});


// ✅ Remove Item from Wishlist
router.delete("/:id", async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Error removing item" });
  }
});

module.exports = router;
