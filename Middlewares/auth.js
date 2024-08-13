// auth.js
// auth.js
const jwt = require('jsonwebtoken');

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const express = require('express'); 
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/profile', auth, (req, res) => {
  res.send(`Bienvenue, utilisateur ${req.user._id}`);
});




exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email ou mot de passe incorrect.');

  // Vérifie le mot de passe (exemple simplifié)
  const isMatch = req.body.password === user.password;
  if (!isMatch) return res.status(400).send('Email ou mot de passe incorrect.');

  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  res.header('Authorization', token).send('Connecté avec succès');
};



const auth = (req, res, next) => {
  const isAuthenticated = true; // Simule l'authentification
  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send('Non autorisé');
  }
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Accès refusé. Pas de token fourni.');

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Token invalide.');
  }
};

module.exports = auth;


  
  module.exports = auth;
  module.exports = router;