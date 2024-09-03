import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SwapiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000', {
          auth: {
            username: 'Luke',  // Nom d'utilisateur
            password: 'DadSucks'  // Mot de passe
          }
        });
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch data from backend');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  console.log(data)

  return (
    <div>
      <h1>SWAPI Links</h1>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> <a href={key}>{value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwapiData;