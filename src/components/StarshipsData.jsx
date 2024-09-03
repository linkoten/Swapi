import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const StarshipsData = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/starships";

  const handlePageChange = (newData) => {
    setData(newData);
  };
  console.log(data);

  return (
    <div className="container mx-auto p-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((starship, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
          <h2 className="text-2xl font-bold mb-4">{starship.name}</h2>
          <ul className="space-y-2 ">
            <li><strong>Model:</strong> {starship.model}</li>
            <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
            <li><strong>Cost:</strong> {starship.cost_in_credits} credits</li>
            <li><strong>Length:</strong> {starship.length} meters</li>
            <li><strong>Crew:</strong> {starship.crew}</li>
            <li><strong>Passengers:</strong> {starship.passengers}</li>
            <li><strong>Cargo Capacity:</strong> {starship.cargo_capacity} kg</li>
            <li><strong>Consumables:</strong> {starship.consumables}</li>
            <li><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</li>
            <li><strong>MGLT:</strong> {starship.MGLT}</li>
            <li><strong>Starship Class:</strong> {starship.starship_class}</li>
          </ul>
        </div>
      ))}
      </div>
            <Pagination onPageChange={handlePageChange} url={url} />
            </div>

  );
};

export default StarshipsData;