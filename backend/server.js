import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
import products from './data/products.js';

// Define your routes and endpoints here
app.get('/', (req, res) => {
  res.send('API Is running...!');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => String(p._id) === productId);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Handle invalid route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Invalid route' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
