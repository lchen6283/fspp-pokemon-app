import React from "react";
import typeColors from "./PokemonTypeColors";

export default function PokedexList({ pokemon }) {
  return (
    <div>
      <ol className="ol" id="pokedex">
        <li className="card">
          <img
            className="card-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <h2 className="card-title">
            {pokemon.id}. {pokemon.name}
          </h2>
          <p className="card-subtitle">
            {pokemon.types.map((type) => {
              return (
                <div
                  className="type"
                  style={{ backgroundColor: typeColors[type.type.name] }}
                >
                  {type.type.name}
                </div>
              );
            })}
          </p>
        </li>
      </ol>
    </div>
  );
}
