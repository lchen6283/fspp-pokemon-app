import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import pokeballSolid from "../assets/pokeball-solid.png";
import pokeballOutline from "../assets/pokeball-outline.png";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PokemonDetails() {
  const [pokemon, setPokemon] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API}/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
        navigate(`/pokemon/${id}`);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/pokemon/${id}`)
      .then(() => {
        navigate("/pokemon");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <div className="pokemon-details">
      <hr></hr>
      <aside className="details">
        <h2>
          {pokemon.favorite ? (
            <p>
              You have <p1>CAUGHT</p1> this pokemon!
            </p>
          ) : (
            <p>
              You have <p2>SEEN</p2> this pokemon!
            </p>
          )}
        </h2>
        <img
          className="pkball"
          src={pokemon.favorite ? pokeballSolid : pokeballOutline}
          alt={pokemon.favorite ? "CAUGHT" : "SEEN"}
        />
      </aside>
      <article>
        <h2>Pokedex No. {pokemon.pokedex}</h2>
        <div>
          <img className="image" src={pokemon.image} alt={pokemon.name} />
          <h2>Name: {pokemon.name}</h2>
          <h2>Type: {pokemon.type}</h2>
          <h2>Region: {pokemon.region}</h2>
        </div>

        <div className="showNavigation">
          <Link to={`/pokemon`}>
            <button>Back</button>
          </Link>

          <Link to={`/pokemon/${pokemon.id}/edit`}>
            <button>Edit</button>
          </Link>

          <button onClick={handleDelete}>Delete</button>
        </div>
      </article>
    </div>
  );
}
export default PokemonDetails;
