import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(`${API}/pokemon`).then((res) => {
      setPokemons(res.data);
    });
  }, []);

  return (
    <div className="Pokemons">
      <article>
        <div>
          <h1>Pokemons List</h1>
          <hr />
          <table>
            <tbody>
              {pokemons.map((pokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />;
              })}
            </tbody>
          </table>
          <br />
          <button>
            <Link to={"/"}>Back</Link>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Pokemons;