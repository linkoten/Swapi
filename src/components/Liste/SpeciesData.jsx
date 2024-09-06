import React from "react";
import DataList from "./DataList";

const SpeciesData = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Classification", key: "classification" },
    { label: "Designation", key: "designation" },
    { label: "Average Height", key: "average_height" },
    { label: "Average Lifespan", key: "average_lifespan" },
    { label: "Language", key: "language" },
    { label: "Skin Colors", key: "skin_colors" },
    { label: "Hair Colors", key: "hair_colors" },
    { label: "Eye Colors", key: "eye_colors" },
  ];

  return <DataList endpoint="species" title="Species" fields={fields} />;
};

export default SpeciesData;
