import { Link } from "react-router-dom";
import pokeballSolid from "../assets/pokeball-solid.png";
import pokeballOutline from "../assets/pokeball-outline.png";

function Pokemon({ pokemon }) {
  return (
    <tr>
      <td className="Pokemon">
        <Link to={`/pokemon/${pokemon.id}`}>
          <span>
            <h4>
              <img
                className="fav"
                src={pokemon.image}
                alt={pokemon.favorite ? "favorite pokemon" : "okay pokemon"}
              />
              <br />
              <img
                className="pkball"
                src={pokemon.favorite ? pokeballSolid : pokeballOutline}
                alt="heart"
              />
              {pokemon.name}
            </h4>
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default Pokemon;
