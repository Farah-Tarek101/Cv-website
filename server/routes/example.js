const express = require('express');
const router = express.Router();
const Example = require('../models/Example');

// Get all examples
router.get('/', async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one example by ID
router.get('/:id', async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) return res.status(404).json({ message: 'Not found' });
    res.json(example);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new example
router.post('/', async (req, res) => {
  const example = new Example({
    name: req.body.name,
    description: req.body.description
  });
  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 