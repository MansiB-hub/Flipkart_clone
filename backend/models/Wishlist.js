const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // To associate with users
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
