const express = require('express');
const router = express.Router();

// Route pour obtenir tous les utilisateurs
router.get('/', (req, res) => {
  res.send('Liste de tous les utilisateurs');
});

// Route pour obtenir un utilisateur spécifique
router.get('/:id', (req, res) => {
  res.send(`Détails de l'utilisateur avec l'ID ${req.params.id}`);
});

module.exports = router;
