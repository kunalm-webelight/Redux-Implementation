import React from "react";
import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/manatee">Manatee</Link></li>
          <li><Link to="/narwhal">Narwhal</Link></li>
          <li><Link to="/whale">Whale</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />}>
          </Route>
          <Route path="/narwhal" element={<Narwhal />}>
          </Route>
          <Route path="/whale" element={<Whale />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
