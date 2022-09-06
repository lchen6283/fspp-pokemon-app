import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

import Kanto from "./Regions/Kanto";
import Johto from "./Regions/Johto";
import Hoenn from "./Regions/Hoenn";
import Sinnoh from "./Regions/Sinnoh";
import Unova from "./Regions/Unova";
import Kalos from "./Regions/Kalos";
import Alola from "./Regions/Alola";
import Galar from "./Regions/Galar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kanto" element={<Kanto />} />
            <Route path="/johto" element={<Johto />} />
            <Route path="/hoenn" element={<Hoenn />} />

            <Route path="/sinnoh" element={<Sinnoh />} />
            <Route path="/unova" element={<Unova />} />
            <Route path="/kalos" element={<Kalos />} />

            <Route path="/Alola" element={<Alola />} />
            <Route path="/Galar" element={<Galar />} />

            <Route path="/pokemon" element={<Index />} />
            <Route path="/pokemon/new" element={<New />} />
            <Route path="/pokemon/:id" element={<Show />} />
            <Route path="/pokemon/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
