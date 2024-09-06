import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Fonction pour remplacer la base de l'URL
const transformUrl = (url) => {
  const baseApiUrl = "https://swapi.dev/api/";
  const localBaseUrl = "http://localhost:5173/";

  return url.startsWith(baseApiUrl) ? url.replace(baseApiUrl, localBaseUrl) : url;
};

// Composant réutilisable pour afficher les listes (characters, planets, etc.)
const InfoList = ({ title, items }) => (
  <p>
    <strong>{title}:</strong>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={transformUrl(item)}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {transformUrl(item)}
          </a>
        </li>
      ))}
    </ul>
  </p>
);

// Composant générique pour afficher les détails de n'importe quelle ressource
const Details = ({ endpoint, resourceType, fields }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${endpoint}/${id}`, {
          auth: { username: "Luke", password: "DadSucks" },
        });
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${resourceType} details:`, error);
      }
    };

    fetchData();
  }, [id, endpoint, resourceType]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-950 p-4 rounded-lg shadow-lg border border-yellow-300 text-slate-100">
        <h1 className="text-3xl font-extrabold text-center mb-6">{data.title || data.name}</h1>

        {/* Afficher les champs de base */}
        {fields.map((field, index) => (
          <p key={index}>
            <strong>{field.label}:</strong> {data[field.key]}
          </p>
        ))}

        {/* Affichage des différentes listes avec l'URL transformée */}
        {data.characters && <InfoList title="Characters" items={data.characters} />}
        {data.planets && <InfoList title="Planets" items={data.planets} />}
        {data.starships && <InfoList title="Starships" items={data.starships} />}
        {data.vehicles && <InfoList title="Vehicles" items={data.vehicles} />}
        {data.species && <InfoList title="Species" items={data.species} />}
        {data.residents && <InfoList title="Residents" items={data.residents} />}
        {data.films && <InfoList title="films" items={data.films} />}


      </div>
    </div>
  );
};

export default Details;
