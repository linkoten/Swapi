import React from "react";
import Details from "./Details";

const PersonDetails = () => {
  const fields = [
    { label: "Height", key: "height" },
    { label: "Mass", key: "mass" },
    { label: "Hair Color", key: "hair_color" },
    { label: "Skin Color", key: "skin_color" },
    { label: "Eye Color", key: "eye_color" },
    { label: "Birth Year", key: "birth_year" },
    { label: "Gender", key: "gender" },
  ];

  return <Details endpoint="people" resourceType="person" fields={fields} />;
};

export default PersonDetails;
