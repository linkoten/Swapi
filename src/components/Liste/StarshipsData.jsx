import React from "react";
import DataList from "./DataList";

const StarshipsData = () => {
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

  return <DataList endpoint="starships" title="Starships" fields={fields} />;
};

export default StarshipsData;
