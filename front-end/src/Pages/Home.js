import PokedexList from "../Components/PokedexList";
import BacktoTopButton from "../Components/BacktoTopButton";
import RegionNav from "../Components/RegionNav";

function Home({ pokemon }) {
  return (
    <div className="Home-Page">
      <header className="Home">
        <h1>Welcome to my Pokédex!</h1>
      </header>
      <RegionNav />
      <div className="pokedex-grid">
        {pokemon.map((p) => (
          <PokedexList pokemon={p.data} />
        ))}
        <BacktoTopButton />
      </div>
    </div>
  );
}

export default Home;
