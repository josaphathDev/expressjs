const express = require("express");
const app = express();

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
