import React from "react";
import { Link } from "react-router-dom";

export default function RegionNav() {
  return (
    <div>
      <article className="nav2">
        <h4>
          <Link to="/kanto">Kanto</Link>
        </h4>
        <h4>
          <Link to="/johto">Johto</Link>
        </h4>
        <h4>
          <Link to="/hoenn">Hoenn</Link>
        </h4>
        <h4>
          <Link to="/sinnoh">Sinnoh</Link>
        </h4>
        <h4>
          <Link to="/unova">Unova</Link>
        </h4>
        <h4>
          <Link to="/kalos">Kalos</Link>
        </h4>
        <h4>
          <Link to="/alola">Alola</Link>
        </h4>
        <h4>
          <Link to="/galar">Galar</Link>
        </h4>
      </article>
    </div>
  );
}
