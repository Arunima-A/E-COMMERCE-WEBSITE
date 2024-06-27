const express = require('express');
const router= express.Router();

const {Order}= require('../db');

//Get all orders

router.get('/', async(req,res)=>{
    
    try{
        const orders= await Order.find();
        res.json(orders);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
});

//Create new order

router.post('/', async(req, res)=>{
    const order = new Order({
        productId: req.body.productId,
        quantity: req.body.quantity,
        user: req.body.user
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Get order by id

router.get('/:id', async(req,res)=>{
    
    try{
        const order = await Order.findById(req.params.id).populate('productId');
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
});

// Update an order
router.patch('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        if (req.body.quantity != null) order.quantity = req.body.quantity;
        if (req.body.status != null) order.status = req.body.status;

        const updatedOrder = await order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete an order

router.delete('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        await order.remove();
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports=router;