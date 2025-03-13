const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/auth");
const wishlistRoutes = require("./routes/wishlist"); // ✅ Import Wishlist Routes
const productRoutes =require("./routes/productRoutes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/cart", cartRoutes);
require('dotenv').congig();

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/flipkart_clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/wishlist", wishlistRoutes); // ✅ Register Wishlist Routes
app.use("/api/products", productRoutes);
// ✅ Default Route
app.get("/", (req, res) => {
  res.send("Flipkart Clone API is running...");
});
app.get('/',(req,res)=>{
  res.redirect(process.env.FRONTEND_URL);
});
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
