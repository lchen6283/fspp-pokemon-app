import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/">Pokédex</Link>
      </h1>
      <h1 className="header">
        <Link to="/pokemon">Index</Link>
      </h1>
      <button className="header">
        <Link to="/pokemon/new">New Pokemon</Link>
      </button>
      <button>Dark Mode</button>
    </nav>
  );
}
