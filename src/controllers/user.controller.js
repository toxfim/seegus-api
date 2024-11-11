const User = require("../models/user.model");

// Foydalanuvchi ma'lumotlarini olish
const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi" });
  }
};

module.exports = { getUserInfo };
