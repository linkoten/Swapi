import React from "react";
import Details from "./Details";

const PlanetDetails = () => {
  const fields = [
    { label: "Climate", key: "climate" },
    { label: "Diameter", key: "diameter" },
    { label: "Gravity", key: "gravity" },
    { label: "Orbital Period", key: "orbital_period" },
    { label: "Population", key: "population" },
    { label: "Rotation Period", key: "rotation_period" },
    { label: "Surface Water", key: "surface_water" },
    { label: "Terrain", key: "terrain" },
  ];

  return <Details endpoint="planets" resourceType="planet" fields={fields} />;
};

export default PlanetDetails;
