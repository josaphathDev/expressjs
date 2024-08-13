const express = require("express");
const app = express();
require("dotenv").config();

const express = require("express");


// Import des middlewares
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const validateData = require("./middleware/validateData");

// Utilisation des middlewares
app.use(logger); // Le middleware logger s'applique à toutes les routes

// Importation des fichiers de routes
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

// Utilisation des routes
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.post("/protected", auth, (req, res) => {
  res.send("Bienvenue dans la zone protégée");
});

app.post("/users", validateData, (req, res) => {
  res.send(`Utilisateur ${req.body.name} créé avec succès !`);
});

app.use((req, res, next) => {
  console.log(" l'Url recue", req.url);
  next(); // Passe à la route suivante
});

app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`Données reçues : ${JSON.stringify(data)}`);
});
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Bonjour, Express.js!de jojo");
});

app.get("/about", (req, res) => {
  res.send("Routes about");
});
app.get("/contacter", (req, res) => {
  res.send("Conctacter nous");
});

app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Bonjour, ${name}!`);
});

app.post("/data", (req, res) => {
  res.send("Données envoyées avec POST");
});

app.put("/data", (req, res) => {
  res.send("Données mises à jour avec PUT");
});

app.delete("/data", (req, res) => {
  res.send("Données supprimées avec DELETE");
});

// Utilisation des variables d'environnement
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
