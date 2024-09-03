import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetsData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(`http://localhost:3000/planets?page=${page}`, {
        auth: {
          username: 'Luke',
          password: 'DadSucks'
        }
      });

      setData(response.data);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch data from backend');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (nextPage) {
      const page = new URL(nextPage).searchParams.get('page');
      setCurrentPage(Number(page));
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      const page = new URL(prevPage).searchParams.get('page');
      setCurrentPage(Number(page));
    }
  };

  if (loading) return <div className="text-center text-xl font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-6">Planets Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.results.map((planet, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{planet.name}</h2>
            <p className="text-gray-700"><strong>Rotation Period:</strong> {planet.rotation_period} hours</p>
            <p className="text-gray-700"><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
            <p className="text-gray-700"><strong>Diameter:</strong> {planet.diameter} km</p>
            <p className="text-gray-700"><strong>Climate:</strong> {planet.climate}</p>
            <p className="text-gray-700"><strong>Gravity:</strong> {planet.gravity}</p>
            <p className="text-gray-700"><strong>Terrain:</strong> {planet.terrain}</p>
            <p className="text-gray-700"><strong>Surface Water:</strong> {planet.surface_water} %</p>
            <p className="text-gray-700"><strong>Population:</strong> {planet.population}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevPage}
          disabled={!prevPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${!prevPage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={!nextPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlanetsData;
