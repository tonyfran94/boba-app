// Handle order submissions
app.post('/api/orders', (req, res) => {
  const { name, drinkId } = req.body;
  const drink = drinks.find(d => d.id === parseInt(drinkId));

  if (!name || !drink) {
    return res.status(400).json({ error: "Missing name or invalid drink" });
  }

  // (In real app, save order to DB. Here we just confirm)
  res.json({ name, drink });
});
