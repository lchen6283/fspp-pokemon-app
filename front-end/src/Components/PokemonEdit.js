import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PokemonEdit() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({
    pokedex: "",
    name: "",
    type: "",
    region: "",
    favorite: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setPokemon({ ...pokemon, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/pokemon/${id}`, pokemon)
      .then(() => {
        navigate(`/pokemon/${id}`);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const onChange = () => {
    setPokemon({ ...pokemon, favorite: !pokemon.favorite });
  };

  return (
    <div className="EditForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="pokedex">Pokedex No.</label>
        <input
          id="pokedex"
          type="text"
          value={pokemon.pokedex}
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
        <input
          id="image"
          type="text"
          value={`${pokemon.image}`}
          onChange={handleTextChange}
        />
        <br />
        <input id="submit" type="submit" value="Edit Pokemon" />
      </form>
      <Link to={`/pokemon/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default PokemonEdit;
