import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SwapiData from "./components/SwapiData";
import PeopleData from "./components/PeopleData";
import FilmsData from "./components/FilmsData";
import StarshipsData from "./components/starShipsData";
import VehiclesData from "./components/VehiclesData";
import PlanetsData from "./components/PlanetsData";
import SpeciesData from "./components/SpeciesData";

const routes = [
  { path: "/", element: <SwapiData /> },
  { path: "/people", element: <PeopleData /> },
  { path: "/planets", element: <PlanetsData /> },
  { path: "/films", element: <FilmsData /> },
  { path: "/species", element: <SpeciesData /> },
  { path: "/vehicles", element: <VehiclesData /> },
  { path: "/starships", element: <StarshipsData /> },
];

function App() {
  return (
    <div className=" bg-cyan-900">
      <Router>
        <nav className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <h1 className="text-xl font-bold">SWAPI Explorer</h1>
            <ul className="flex space-x-4">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    to={route.path}
                    className="hover:bg-gray-700 px-3 py-2 rounded-lg transition duration-300"
                  >
                    {route.path === "/" ? "Home" : route.path.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <Routes className>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
