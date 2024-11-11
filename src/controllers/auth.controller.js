const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Foydalanuvchi mavjud' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    const token = generateToken(user._id);

    res.status(201).json({ message: 'Foydalanuvchi ro\'yxatdan o\'tdi', token });
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Parol noto\'g\'ri' });

    const token = generateToken(user._id);

    res.status(200).json({ message: 'Foydalanuvchi tizimga kirdi', token });
  } catch (error) {
    res.status(500).json({ message: 'Xatolik yuz berdi' });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { registerUser, loginUser };
