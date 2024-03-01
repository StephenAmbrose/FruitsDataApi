const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
const Food = require('./models/foodinfo'); // Import the food model
require('./db/conn');
app.use(express.json());

// Create (POST)
app.post('/foods', async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read All (GET) - Sorted by creation date (oldest first)
app.get('/getAllfoods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Read One (GET by ID)
app.get('/foodsById/:id', async (req, res) => {
  const foodId = req.params.id;
  try {
    const food = await Food.findOne({ foodId: foodId });
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update (PUT)
app.put('/updateFoods/:id', async (req, res) => {
  const foodId = req.params.id;
  try {
    const updatedFood = await Food.findOneAndUpdate(
      { foodId: foodId },
      req.body,
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json(updatedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete (DELETE)
app.delete('/deleteFoods/:id', async (req, res) => {
  const foodId = req.params.id;
  try {
    const deletedFood = await Food.findOneAndDelete({ foodId: foodId });
    if (!deletedFood) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.json({ message: 'Food deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
