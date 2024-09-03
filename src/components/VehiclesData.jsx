import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const VehiclesData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = "http://localhost:3000/vehicles";

  const handlePageChange = (newData) => {
    setData(newData);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((vehicle, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">{vehicle.name}</h2>
            <ul className="space-y-2">
              <li>
                <strong>Model:</strong> {vehicle.model}
              </li>
              <li>
                <strong>Manufacturer:</strong> {vehicle.manufacturer}
              </li>
              <li>
                <strong>Cost:</strong> {vehicle.cost_in_credits} credits
              </li>
              <li>
                <strong>Length:</strong> {vehicle.length} meters
              </li>
              <li>
                <strong>Crew:</strong> {vehicle.crew}
              </li>
              <li>
                <strong>Passengers:</strong> {vehicle.passengers}
              </li>
              <li>
                <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity} kg
              </li>
              <li>
                <strong>Consumables:</strong> {vehicle.consumables}
              </li>
              <li>
                <strong>Vehicle Class:</strong> {vehicle.vehicle_class}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} url={url} />
    </div>
  );
};

export default VehiclesData;
