// DEPENDENCIES

const express = require("express");
const cors = require("cors");
const pokemonController = require("./controllers/pokemonController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/pokemon", pokemonController);

// ROUTES
app.get("/", (req, res) => {
  res.send("POKEMON TEAM!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

// EXPORT
module.exports = app;
