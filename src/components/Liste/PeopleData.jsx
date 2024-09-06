import React from "react";
import DataList from "./DataList";

const PeopleData = () => {
  const fields = [
    { label: "Name", key: "name" },
    { label: "Height", key: "height" },
    { label: "Mass", key: "mass" },
    { label: "Hair Color", key: "hair_color" },
    { label: "Skin Color", key: "skin_color" },
    { label: "Eye Color", key: "eye_color" },
    { label: "Birth Year", key: "birth_year" },
    { label: "Gender", key: "gender" },
  ];

  return <DataList endpoint="people" title="People" fields={fields} />;
};

export default PeopleData;
