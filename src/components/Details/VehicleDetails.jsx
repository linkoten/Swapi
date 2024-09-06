import React from "react";
import Details from "./Details";

const VehicleDetails = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Model", key: "model" },
    { label: "Manufacturer", key: "manufacturer" },
    { label: "Cost in Credits", key: "cost_in_credits" },
    { label: "Length", key: "length" },
    { label: "Max Atmosphering Speed", key: "max_atmosphering_speed" },
    { label: "Crew", key: "crew" },
    { label: "Passengers", key: "passengers" },
    { label: "Vehicle Class", key: "vehicle_class" },
  ];

  return <Details endpoint="vehicles" resourceType="vehicle" fields={fields} />;
};

export default VehicleDetails;
