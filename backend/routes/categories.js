// routes/categories.js
const express = require('express');
const router = express.Router();
const {Category} = require('../db');
const {Product}= require('../db');
const mongoose = require('mongoose');

// Create a new category
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    try {
        const newCategory = new Category({ name, description });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a category by ID
router.get('/:categoryId', async (req, res) => {
    const { categoryId } = req.params;

    try {
        // Check if the categoryId is a valid ObjectId
        if (!mongoose.isValidObjectId(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }

        // Find the category by its categoryId
        const category = await Category.findById(categoryId);

        // If category not found, return a 404 status code
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // If category found, return the category
        res.status(200).json(category);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
});


// Update a category
router.put('/:id', async (req, res) => {
    const { name, description } = req.body;
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a category
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
