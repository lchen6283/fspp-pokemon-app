import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

import Kanto from "./Regions/Kanto";
import Johto from "./Regions/Johto";
import Hoenn from "./Regions/Hoenn";
import Sinnoh from "./Regions/Sinnoh";
import Unova from "./Regions/Unova";
import Kalos from "./Regions/Kalos";
import Alola from "./Regions/Alola";
import Galar from "./Regions/Galar";

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemonList = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= 905; i++) {
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
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home pokemon={pokemon} />} />
            <Route path="/kanto" element={<Kanto pokemon={pokemon} />} />
            <Route path="/johto" element={<Johto pokemon={pokemon} />} />
            <Route path="/hoenn" element={<Hoenn pokemon={pokemon} />} />

            <Route path="/sinnoh" element={<Sinnoh pokemon={pokemon} />} />
            <Route path="/unova" element={<Unova pokemon={pokemon} />} />
            <Route path="/kalos" element={<Kalos pokemon={pokemon} />} />

            <Route path="/Alola" element={<Alola pokemon={pokemon} />} />
            <Route path="/Galar" element={<Galar pokemon={pokemon} />} />

            <Route path="/pokemon" element={<Index />} />
            <Route path="/pokemon/new" element={<New />} />
            <Route path="/pokemon/:id" element={<Show />} />
            <Route path="/pokemon/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
