const db = require("../db/dbConfig.js");

const getAllPokemon = async () => {
  try {
    return await db.any("SELECT * FROM pokemon");
  } catch (error) {
    return error;
  }
};

const getPokemon = async (id) => {
  try {
    return await db.one("SELECT * FROM pokemon WHERE id=$1", id);
  } catch (error) {
    return error;
  }
};

const createPokemon = async (pokemon) => {
  try {
    if (!pokemon.image || pokemon.image === "") {
      pokemon.image =
        "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    }
    console.log(pokemon.image);
    return await db.any(
      "INSERT INTO pokemon (pokedex, name, type, region, favorite, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        pokemon.pokedex,
        pokemon.name,
        pokemon.type,
        pokemon.region,
        pokemon.favorite,
        pokemon.image,
      ]
    );
  } catch (error) {}
};

const updatePokemon = async (
  id,
  { pokedex, name, type, region, favorite, image }
) => {
  try {
    return await db.one(
      "UPDATE pokemon SET pokedex=$1, name=$2, type=$3, region=$4, favorite=$5, image=$6 where id=$7 RETURNING *",
      [pokedex, name, type, region, favorite, image, id]
    );
  } catch (error) {
    return error;
  }
};

const deletePokemon = async (id) => {
  try {
    return await db.one("DELETE FROM pokemon WHERE id=$1 RETURNING *", id);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPokemon,
  getPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
