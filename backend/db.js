const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arunima2:Aru%400412@cluster0.f7hy09r.mongodb.net/ecommerce`', {
    }).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Database connection error:', err);
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String, // Assuming the image URL will be a string
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});


const orderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'],
        default: 'Pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    cartItems: {
        type: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    },
    accountVerified: {
        type: Boolean,
        default: false
    }
   
    
  });

  const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }
});

const adminSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        default: 'admin' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
  });
const Order = mongoose.model('Order', orderSchema);

const User= mongoose.model('User', userSchema);

const Product = mongoose.model('Product', productSchema);

const Category = mongoose.model('Category', categorySchema);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = {Product, Order, User, Category, Admin};

