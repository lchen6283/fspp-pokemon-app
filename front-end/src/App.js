import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

// import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";
// import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Index />} />
            <Route path="/pokemon/new" element={<New />} />
            <Route path="/pokemon/:id" element={<Show />} />
            <Route path="/pokemon/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
