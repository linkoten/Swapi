import React, { useState } from "react";
import Pagination from "./Pagination";

const SpeciesData = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3000/species";

  const handlePageChange = (newData) => {
    setData(newData);
  };
  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-6">Species Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((specie, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-gray-700">
            <h2 className="text-2xl font-bold mb-4">{specie.name}</h2>
            <li>
              <strong>Classification:</strong> {specie.classification}
            </li>
            <li>
              <strong>Designation:</strong> {specie.designation}
            </li>
            <li>
              <strong>Average Height:</strong> {specie.average_height} cm
            </li>
            <li>
              <strong>Skin Colors:</strong> {specie.skin_colors}
            </li>
            <li>
              <strong>Hair Colors:</strong> {specie.hair_colors}
            </li>
            <li>
              <strong>Eye Colors:</strong> {specie.eye_colors}
            </li>
            <li>
              <strong>Average Lifespan:</strong> {specie.average_lifespan} years
            </li>
            <li>
              <strong>Language:</strong> {specie.language}
            </li>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} url={url} />
    </div>
  );
};

export default SpeciesData;
