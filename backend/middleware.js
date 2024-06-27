// authMiddleware.js
const jwt = require('jsonwebtoken');
const {User} = require('./db');
const  {JWT_SECRET}  = require('./config') ;
const authMiddleware = async (req, res, next) => {
  
  const token = req.header('Authorization').replace('Bearer ', '');
  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

module.exports = authMiddleware;
