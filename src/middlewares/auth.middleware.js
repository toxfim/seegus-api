const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Authorization: Bearer <token>

  if (!token) return res.status(401).json({ message: "Token yo'q" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token noto'g'ri yoki muddati o'tgan" });
  }
};

module.exports = { authenticate };
