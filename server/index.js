const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../client')));

// Sample drinks data
const drinks = [
  { id: 1, name: "Classic Milk Tea", price: 4.5 },
  { id: 2, name: "Taro Milk Tea", price: 5 },
  { id: 3, name: "Matcha Latte", price: 5.5 }
];

// API route
app.get('/api/drinks', (req, res) => {
  res.json(drinks);
});

// Fallback for single-page app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
