// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Product} = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require("../config");
const   authMiddleware = require("../middleware");
const mongoose = require("mongoose");


const signupBody = zod.object({
    email: zod.string().email(),
	auth0Id: zod.string()
})

const signinBody = zod.object({
    email: zod.string().email(),
	auth0Id: zod.string()
})

router.post('/check-user', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  res.json({ exists: !!user });
});

router.post('/sign-up', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: newUser._id, username: newUser.username , email: newUser.email} });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/me', authMiddleware, async (req, res) => {
  res.json({ user: req.user });
});

router.put('/cart', authMiddleware, async (req, res) => {
  console.log('Inside put logic');
  const { userId, productId, quantity } = req.body;
  console.log(typeof(quantity));
  console.log('Received userId:', userId);
  console.log('Received productId:', productId);
  if (!userId || !productId) {
    return res.status(400).json({ message: 'userId and productId are required' });
  }

  try {
    
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const user = await User.findById(userObjectId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let existingItem = user.cartItems.find((item) => item.productId.toString() === productId);
    if (existingItem) {
      // Increase quantity if the product is already in the cart
      existingItem.quantity += quantity;
    } else {
      // Add new product to the cart with quantity 1
      user.cartItems.push({ productId, quantity: quantity });
    }

    // Update product stock
    const product = await Product.findById(productId);
    if (product) {
      product.stock -= 1;
      await product.save();
    }

    await user.save();
    res.json({ message: 'Product added to cart', cartItems: user.cartItems });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/cart', async (req, res) => {
  const { userId } = req.body;
  console.log('Received userId:', userId);

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  try {
    // Convert userId to ObjectId using the new keyword and ensure it's a valid string
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const user = await User.findById(userObjectId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ cartItems: user.cartItems });
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;