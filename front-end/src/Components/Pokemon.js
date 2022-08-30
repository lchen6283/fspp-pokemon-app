import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

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
              <img
                className="hearts"
                src={pokemon.favorite ? heartSolid : heartOutline}
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
