import PokedexList from "../Components/PokedexList";
import BacktoTopButton from "../Components/BacktoTopButton";
import RegionNav from "../Components/RegionNav";

export default function Galar({ pokemon }) {
  return (
    <div className="Home-Page">
      <header className="Home">
        <h1>Galar Pokédex!</h1>
      </header>
      <RegionNav />
      <div className="pokedex-grid">
        {pokemon.slice(809, 905).map((p) => (
          <PokedexList pokemon={p.data} />
        ))}
        <BacktoTopButton />
      </div>
    </div>
  );
}
