const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// servir arquivos estáticos da raiz
app.use(express.static(__dirname));

// rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// login
app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// dashboard
app.get("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
