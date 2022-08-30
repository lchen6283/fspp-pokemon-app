import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/pokemon">Pokemon Log</Link>
      </h1>
      <button>
        <Link to="/pokemon/new">New Pokemon</Link>
      </button>
    </nav>
  );
}
