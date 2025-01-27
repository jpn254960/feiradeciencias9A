const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database("./db.sqlite", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite.");
  }
});

// Middleware para servir arquivos estáticos (como o HTML e JS)
app.use(express.static(path.join(__dirname, "public")));

// Definir uma rota para o caminho raiz ('/')
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint para buscar dados do banco de dados
app.get("/data", (req, res) => {
  const sql = "SELECT id, name FROM users"; // Altere conforme necessário
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
