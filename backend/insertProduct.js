const mongoose=require( "mongoose");
const dotenv =require( "dotenv");
const Product =require( "./models/Product.js"); // Update path as needed

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  const products = [
    { name: "Smartphone", price: 15000, category: "Electronics", image: "/images/Smartphone.jpg" },
    { name: "Laptop", price: 50000, category: "Electronics", image: "/images/Laptop.jpg" },
    { name: "Headphones", price: 2000, category: "Electronics", image: "/images/Headphones.jpg" },
    { name: "Smartwatch", price: 10000, category: "Electronics", image: "/images/Smartwatch.jpg" },
    { name: "T-Shirt", price: 500, category: "Fashion", image: "/images/T-shirt.jpg" },
    { name: "Jeans", price: 1500, category: "Fashion", image: "/images/Jeans.jpg" },
    { name: "Sofa", price: 20000, category: "Home & Kitchen", image: "/images/Sofa.jpg" },
    { name: "Cookware Set", price: 3000, category: "Home & Kitchen", image: "/images/CookwareSet.jpg" },
    { name: "Novel", price: 300, category: "Books", image: "/images/Novel.jpg" },
    { name: "Textbook", price: 800, category: "Books", image: "/images/Textbook.jpg" },
  ];
  
  // Insert Products into Database
  const insertProducts = async () => {
    try {
      await Product.insertMany(products);
      console.log("✅ Products Inserted Successfully!");
      mongoose.connection.close();
    } catch (error) {
      console.error("❌ Error Inserting Products:", error);
      mongoose.connection.close();
    }
  };
  
  insertProducts();