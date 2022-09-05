import React from "react";

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
            Type: {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </li>
      </ol>
    </div>
  );
}
