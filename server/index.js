const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Example drinks data
const drinks = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Tea" },
  { id: 3, name: "Juice" }
];

// Handle order submissions
app.post('/api/orders', (req, res) => {
  const { name, drinkId } = req.body;

  // Validate name
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  // Validate and parse drinkId
  const drinkIdNum = parseInt(drinkId, 10);
  if (isNaN(drinkIdNum)) {
    return res.status(400).json({ error: "Invalid drink ID" });
  }

  // Find the drink by ID
  const drink = drinks.find(d => d.id === drinkIdNum);
  if (!drink) {
    return res.status(400).json({ error: "Drink not found" });
  }

  // In a real app, save the order to a database here

  // Respond with confirmation
  res.json({ message: "Order received", order: { name, drink } });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
