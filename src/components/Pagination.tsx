import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = ({ url, onPageChange }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(`${url}?page=${page}`, {
        auth: {
          username: 'Luke',
          password: 'DadSucks'
        }
      });

      onPageChange(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      setLoading(false);
    } catch (error) {
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
  );
};

export default Pagination;