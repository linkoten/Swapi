import React from "react";
import Details from "./Details";

const StarshipDetails = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Model", key: "model" },
    { label: "Manufacturer", key: "manufacturer" },
    { label: "Cost in Credits", key: "cost_in_credits" },
    { label: "Length", key: "length" },
    { label: "Crew", key: "crew" },
    { label: "Passengers", key: "passengers" },
    { label: "Max Atmosphering Speed", key: "max_atmosphering_speed" },
    { label: "Hyperdrive Rating", key: "hyperdrive_rating" },
    { label: "Starship Class", key: "starship_class" },
  ];

  return <Details endpoint="starships" resourceType="starship" fields={fields} />;
};

export default StarshipDetails;
