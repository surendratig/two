const express = require('express');
const router = express.Router();
const products = require('../data/products');

// GET /api/products?q=&category=
router.get('/', (req, res) => {
  const { q, category } = req.query;
  let result = products;

  if (category) {
    const cat = String(category).toLowerCase();
    result = result.filter(p => p.category.toLowerCase() === cat);
  }

  if (q) {
    const term = String(q).toLowerCase();
    result = result.filter(
      p =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }

  res.json(result);
});

// GET /api/products/:category
router.get('/:category', (req, res) => {
  const cat = req.params.category.toLowerCase();
  const result = products.filter(p => p.category.toLowerCase() === cat);
  res.json(result);
});

// GET /api/products/:category/:id
router.get('/:category/:id', (req, res) => {
  const cat = req.params.category.toLowerCase();
  const id = req.params.id;
  const item = products.find(
    p => p.category.toLowerCase() === cat && String(p.id) === String(id)
  );
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

module.exports = router;

