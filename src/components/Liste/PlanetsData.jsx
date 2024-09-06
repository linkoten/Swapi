import React from "react";
import DataList from "./DataList";

const PlanetsData = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Climate", key: "climate" },
    { label: "Diameter", key: "diameter" },
    { label: "Gravity", key: "gravity" },
    { label: "Orbital Period", key: "orbital_period" },
    { label: "Population", key: "population" },
    { label: "Rotation Period", key: "rotation_period" },
    { label: "Surface Water", key: "surface_water" },
    { label: "Terrain", key: "terrain" },
  ];

  return <DataList endpoint="planets" title="Planets" fields={fields} />;
};

export default PlanetsData;
