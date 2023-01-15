import PokedexList from "../Components/PokedexList";
import BacktoTopButton from "../Components/BacktoTopButton";
import RegionNav from "../Components/RegionNav";

export default function Kalos({ pokemon }) {
  return (
    <div className="Home-Page">
      <header className="Home">
        <h1>Kalos Pokédex!</h1>
      </header>
      <RegionNav />
      <div className="pokedex-grid">
        {pokemon.slice(649, 721).map((p) => (
          <PokedexList pokemon={p.data} />
        ))}
        <BacktoTopButton />
      </div>
    </div>
  );
}
