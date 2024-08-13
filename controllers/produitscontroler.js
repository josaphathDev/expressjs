// Fonction pour obtenir tous les produits
exports.getAllProducts = (req, res) => {
    res.send('Récupération de tous les produits');
  };
  
  // Fonction pour obtenir un produit par ID
  exports.getProductById = (req, res) => {
    res.send(`Récupération du produit avec l'ID ${req.params.id}`);
  };
  