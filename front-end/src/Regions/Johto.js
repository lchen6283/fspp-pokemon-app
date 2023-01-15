import PokedexList from "../Components/PokedexList";
import BacktoTopButton from "../Components/BacktoTopButton";
import RegionNav from "../Components/RegionNav";

function Johto({ pokemon }) {
  return (
    <div className="Home-Page">
      <header className="Home">
        <h1>Johto Pokédex!</h1>
      </header>
      <RegionNav />
      <div className="pokedex-grid">
        {pokemon.slice(151, 251).map((p) => (
          <PokedexList pokemon={p.data} />
        ))}
        <BacktoTopButton />
      </div>
    </div>
  );
}

export default Johto;
