import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SwapiData from "./components/Liste/SwapiData";
import PeopleData from "./components/Liste/PeopleData";
import FilmsData from "./components/Liste/FilmsData";
import StarshipsData from "./components/Liste/StarshipsData";
import VehiclesData from "./components/Liste/VehiclesData";
import PlanetsData from "./components/Liste/PlanetsData";
import SpeciesData from "./components/Liste/SpeciesData";
import PersonDetails from "./components/Details/PersonDetails";
import PlanetDetails from "./components/Details/PlanetDetails";
import FilmDetails from "./components/Details/filmDetails";
import SpeciesDetails from "./components/Details/SpeciesDetails";
import VehicleDetails from "./components/Details/VehicleDetails";
import StarshipDetails from "./components/Details/StarshipDetails";
import backgroundImage1 from "../src/assets/background.jpg";

const routes = [
  { path: "/", element: <SwapiData /> },
  { path: "/people", element: <PeopleData /> },
  { path: "/planets", element: <PlanetsData /> },
  { path: "/planets/:id", element: <PlanetDetails /> },
  { path: "/films", element: <FilmsData /> },
  { path: "/species", element: <SpeciesData /> },
  { path: "/vehicles", element: <VehiclesData /> },
  { path: "/vehicles/:id", element: <VehicleDetails /> },
  { path: "/starships", element: <StarshipsData /> },
  { path: "/people/:id", element: <PersonDetails /> },
  { path: "/films/:id", element: <FilmDetails /> },
  { path: "/species/:id", element: <SpeciesDetails /> },
  { path: "/starships/:id", element: <StarshipDetails /> },
];

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage1})`,
      }}
    >
      <Router>
        <nav className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <ul className="flex space-x-4">
              {/* Filtrer les routes sans `:id` pour la navbar */}
              {routes
                .filter((route) => !route.path.includes(":id"))
                .map((route, index) => (
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
