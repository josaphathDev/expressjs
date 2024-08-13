const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nom_de_ta_base_de_donnees', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;
  const User = require('./models/User');

  app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
  });
    