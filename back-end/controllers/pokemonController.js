const express = require("express");
const pokemon = express.Router();
const {
  getAllPokemon,
  getPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
} = require("../queries/pokemon.js");

const {
  checkBoolean,
  checkName,
  checkForNoAdditionalParams,
} = require("../validations/checkPokemon");

// INDEX
pokemon.get("/", async (req, res) => {
  const allPokemon = await getAllPokemon();
  if (allPokemon) {
    res.status(200).json(allPokemon);
  } else {
    res.status(500).json({ error: "server error" });
  }
  console.log(allPokemon);
});

// SHOW
pokemon.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemon = await getPokemon(id);
  if (pokemon.id) {
    res.status(200).json(pokemon);
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

// CREATE
pokemon.post(
  "/",
  checkName,
  checkBoolean,
  checkForNoAdditionalParams,
  async (req, res) => {
    try {
      const pokemon = await createPokemon(req.body);
      res.json(pokemon);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

// UPDATE
pokemon.put("/:id", async (req, res) => {
  try {
    const pokemon = await updatePokemon(req.params.id, req.body);
    res.json({ success: true, payload: pokemon });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
});

// DELETE
pokemon.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPokemon = await deletePokemon(id);
  if (deletedPokemon) {
    if (deletedPokemon.id) {
      res.status(200).json(deletedPokemon);
    } else {
      res.status(404).json(deletedPokemon);
    }
  } else {
    res.status(500).json({ success: false, payload: deletedPokemon });
  }
});

module.exports = pokemon;
