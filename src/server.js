require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db"); // DB ulanish konfiguratsiyasi
const routes = require("./routes"); // Barcha yo'nalishlarni yuklash

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use(express.json()); // JSON formatda ma'lumot olish
app.use("/", routes); // Barcha yo'nalishlarni ishlatish

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishga tushdi`);
});
