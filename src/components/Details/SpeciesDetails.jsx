import React from "react";
import Details from "./Details";

const SpeciesDetails = () => {
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

  return <Details endpoint="species" resourceType="species" fields={fields} />;
};

export default SpeciesDetails;
