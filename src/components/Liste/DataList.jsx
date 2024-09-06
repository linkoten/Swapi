import React, { useEffect, useState } from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

const DataList = ({ endpoint, title, fields }) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`http://localhost:3000/${endpoint}`);

  useEffect(() => {
    setUrl(`http://localhost:3000/${endpoint}`);
  }, [endpoint]);

  const handleSearchChange = (newData) => {
    setData(newData);
  };

  

  return (
    <div className="container mx-auto p-4">
 
      <Search onSearchChange={handleSearchChange} url={url} />

      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-100">{title} Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Link to={`/${endpoint}/${index + 1}`} key={index}>
            <div
              key={index}
              className="bg-gray-950 p-4 rounded-lg shadow-lg border border-yellow-300"
            >
              {fields.map(({ label, key }) => (
                <p className="text-gray-100" key={key}>
                  <strong>{label}:</strong> {item[key]}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DataList;
