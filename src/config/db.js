const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDBga ulanish muvaffaqiyatli");
  } catch (error) {
    console.error("MongoDBga ulanishda xatolik:", error);
    process.exit(1); // Jarayonni to'xtatish
  }
};

module.exports = connectDB;
