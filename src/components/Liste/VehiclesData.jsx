import React from "react";
import DataList from "./DataList";

const VehiclesData = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Model", key: "model" },
    { label: "Manufacturer", key: "manufacturer" },
    { label: "Cost in Credits", key: "cost_in_credits" },
    { label: "Length", key: "length" },
    { label: "Crew", key: "crew" },
    { label: "Passengers", key: "passengers" },
    { label: "Cargo Capacity", key: "cargo_capacity" },
    { label: "Consumables", key: "consumables" },
    { label: "Vehicle Class", key: "vehicle_class" },
  ];

  return <DataList endpoint="vehicles" title="Vehicles" fields={fields} />;
};

export default VehiclesData;
