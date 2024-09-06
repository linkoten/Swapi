import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ url, onSearchChange }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}?search=${searchTerm}`, {
        auth: {
          username: "Luke",
          password: "DadSucks",
        },
      });

      onSearchChange(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, url]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Mettre à jour le terme de recherche
  };

  if (loading)
    return <div className="text-center text-xl font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <input
      type="text"
      placeholder="Search "
      value={searchTerm}
      onChange={handleInputChange}
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  );
};

export default Search;
