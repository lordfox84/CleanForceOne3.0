const express = require("express");
const path = require("path");
const app = express();

// Nastavení EJS jako šablonovací engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servírování statických souborů
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

// Definování základní trasy
app.get("/", (req, res) => {
  const navText = {
    home: "Domů",
    about: "O nás",
    services: "Služby",
    portfolio: "Galerie",
    team: "Tým",
    contact: "Kontakt",
  };
  res.render("index", { navText });
});

// Trasa pro zpracování formuláře
app.post("/process_form", (req, res) => {
  const { name, email, message } = req.body;
  // Zpracování formuláře zde, například odeslání emailu
  res.send("Formulář byl úspěšně odeslán.");
});

// Spuštění serveru
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
