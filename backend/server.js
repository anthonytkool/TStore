import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

import productRoutes from './routes/productRoutes.js';
// Define your routes and endpoints here
app.get('/', (req, res) => {
  res.send('API Is running...!');
});

app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
