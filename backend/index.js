const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categories');
const adminRoutes = require('./routes/admin');

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/user', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API');
});
app.post('/api/payment', async (req, res) => {
    const { amount, paymentMethodId } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: 'usd',
        payment_method: paymentMethodId,
        confirm: true,
      });
      res.status(200).send({ success: true, paymentIntent });
    } catch (error) {
      console.error('Payment error:', error);
      res.status(500).send({ error: error.message });
    }
  });
const port = process.env.PORT || 3001;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });