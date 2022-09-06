import React, { useState, useEffect } from "react";
import PokedexList from "../Components/PokedexList";
import BacktoTopButton from "../Components/BacktoTopButton";
import RegionNav from "../Components/RegionNav";
import axios from "axios";

export default function Sinnoh() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 387; i <= 493; i++) {
      pokemonArray.push(await getPokemonData(i));
    }
    setPokemon(pokemonArray);
  };

  const getPokemonData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  };

  useEffect(() => {
    getPokemonList();
  });

  return (
    <div className="Home-Page">
      <header className="Home">
        <h1>Welcome to my Pokédex!</h1>
      </header>
      <RegionNav />
      <div className="pokedex-grid">
        {pokemon.map((p) => (
          <PokedexList pokemon={p.data} />
        ))}
        <BacktoTopButton />
      </div>
    </div>
  );
}
