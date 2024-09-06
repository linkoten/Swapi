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
    <div className="container mx-auto p-4 text-center text-gray-100">
    <h1 className="text-4xl font-bold mb-4">Bienvenue dans la Base de Données Galactique !</h1>
    <p className="text-xl mb-4">
      Cher habitant de la galaxie, vous êtes maintenant dans notre base de données galactique. Vous pouvez explorer toutes les informations concernant les personnes, les planètes, les espèces, les vaisseaux spatiaux et les films de l'univers Star Wars.
    </p>
    <p className="text-lg mb-4">
      Utilisez la fonction de recherche pour trouver des informations spécifiques ou naviguez à travers les différentes sections pour découvrir les données disponibles.
    </p>
    <p className="text-lg mb-4">
      Que la Force soit avec vous dans votre exploration des mystères de la galaxie !
    </p>
  </div>
  );
};

export default SwapiData;