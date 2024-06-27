const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const {Product}= require('../db');
const {Category} = require('../db');


router.get('/all', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Create a new product

router.post('/', async (req, res) => {
    const { name, price, description, stock, image, categoryId } = req.body;

    if (!name || !price || !description || !categoryId || !stock || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    const product = await Product.create({
        name,
        price,
        description,
        category,
        stock,
        image,
        category: categoryId
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Get all products for same categoryId
router.get('/related', async (req, res) => {
    const { categoryId } = req.query;

    try {
        // Fetch related products from the database
        const relatedProducts = await Product.find({ category: categoryId });

        // Send the fetched products as the response
        res.status(200).json(relatedProducts);
    } catch (error) {
        console.error('Error fetching related products:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




//get a single product

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//update a product

router.put('/:id', async (req, res) => {
    const { name, description, price, categoryId } = req.body;
    try {
        const category = await Category.findById(categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        const product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, category: categoryId }, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Delete a product

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const categoryName = req.query.categoryName;
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const products = await Product.find({ category: category._id });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/add', async (req, res) => {
    const { name, description, price, stock, image, category } = req.body;
  
    console.log('Request body:', req.body); // Log the request body
  
    // Validate input
    if (!name || !description || !price || !stock || !image || !category) {
      console.error('Validation error: Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    // Validate and convert category to ObjectId
    let categoryId;
    if (mongoose.Types.ObjectId.isValid(category)) {
      categoryId = new mongoose.Types.ObjectId(category);
    } else {
      console.error('Invalid category ID format');
      return res.status(400).json({ error: 'Invalid category ID format' });
    }
  
    console.log(`Category ID type: ${typeof(categoryId)}`); // Log the type of categoryId
  
    try {
      // Create a new product
      const newProduct = new Product({
        name,
        description,
        price,
        stock,
        image,
        category: categoryId
      });
  
      // Save the product to the database
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error saving product:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock, image, category } = req.body;
  
    try {
      // Find the product by ID and update its fields
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price, stock, image, category },
        { new: true } // To return the updated document
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params; // Extract product ID from URL params
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports= router;