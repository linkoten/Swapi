import React, { useState } from 'react';
import Pagination from './Pagination';

const FilmsData = () => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:3000/films';


  const handlePageChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-6">Films Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((film, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{film.title}</h2>
            <p className="text-gray-700"><strong>Episode ID:</strong> {film.episode_id}</p>
            <p className="text-gray-700"><strong>Opening Crawl:</strong> {film.opening_crawl}</p>
            <p className="text-gray-700"><strong>Director:</strong> {film.director}</p>
            <p className="text-gray-700"><strong>Producer:</strong> {film.producer}</p>
            <p className="text-gray-700"><strong>Release Date:</strong> {film.release_date}</p>
          </div>
        ))}
      </div>
      <Pagination onPageChange={handlePageChange} url={url}/>
    </div>
  );
};

export default FilmsData;