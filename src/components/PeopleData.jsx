import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const PeopleData = () => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:3000/people';


  const handlePageChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-6">People Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((person, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
            <p className="text-gray-700"><strong>Height:</strong> {person.height} cm</p>
            <p className="text-gray-700"><strong>Mass:</strong> {person.mass} kg</p>
            <p className="text-gray-700"><strong>Hair Color:</strong> {person.hair_color}</p>
            <p className="text-gray-700"><strong>Skin Color:</strong> {person.skin_color}</p>
            <p className="text-gray-700"><strong>Eye Color:</strong> {person.eye_color}</p>
            <p className="text-gray-700"><strong>Birth Year:</strong> {person.birth_year}</p>
            <p className="text-gray-700"><strong>Gender:</strong> {person.gender}</p>
            <p className="text-gray-700"><strong>Homeworld:</strong> <a href={person.homeworld} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{person.homeworld}</a></p>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} url={url}/>

    </div>
  );
};

export default PeopleData;