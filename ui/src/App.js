import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./view/FrontPage";
import Dashboard from "./view/Dashboard";
// import PlayerForm from "./components/PlayerForm";
import DisplayPlayer from "./view/DisplayPlayer";
// import DisplayTeam from "./views/DisplayTeam";
// import Favorites from "./views/Favorites";
// import Compare from "./views/Compare";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/playerForm" element={<PlayerForm />} /> */}
        <Route path="/display/player/:id" element={<DisplayPlayer />} />
        {/* <Route path="/compare/" element={<Compare />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/display/team/:id" element={<DisplayTeam />} /> */}
      </Routes>
    </div>
  );
}

export default App;
