const express = require('express');
const router = express.Router();

// Route pour obtenir tous les produits
router.get('/', (req, res) => {
  res.send('Liste de tous les produits');
});

// Route pour obtenir un produit spécifique
router.get('/:id', (req, res) => {
  res.send(`Détails du produit avec l'ID ${req.params.id}`);
});

module.exports = router;
