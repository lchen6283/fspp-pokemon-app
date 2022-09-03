import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PokemonNew() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({
    pokedex: 0,
    name: "",
    type: "",
    region: "",
    favorite: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setPokemon({ ...pokemon, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/pokemon`, pokemon)
      .then(() => {
        navigate(`/pokemon`);
      })
      .catch((err) => {
        console.warn(err);
      });
    console.log(`${API}/pokemon`);
  };

  const onChange = () => {
    setPokemon({ ...pokemon, favorite: !pokemon.favorite });
  };

  return (
    <div className="NewForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="pokedex">Pokédex No.</label>
        <input
          id="pokedex"
          type="number"
          // value={pokemon.pokedex}
          onChange={handleTextChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={pokemon.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          name="type"
          value={pokemon.type}
          placeholder="type"
          onChange={handleTextChange}
        />
        <label htmlFor="region">Region:</label>
        <input
          id="region"
          type="text"
          name="region"
          value={pokemon.region}
          onChange={handleTextChange}
          placeholder="region"
        />
        <label htmlFor="favorite">Favorite</label>
        <input
          id="favorite"
          type="checkbox"
          name="favorite"
          value={pokemon.favorite}
          onChange={onChange}
        />
        <label htmlFor="image">Pokemon Image: </label>
        <input id="image" type="text" onChange={handleTextChange} />
        <br />
        <input id="submit" type="submit" value="Add New Pokemon" />
      </form>
    </div>
  );
}
export default PokemonNew;
