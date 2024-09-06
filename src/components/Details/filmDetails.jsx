import React from "react";
import Details from "./Details";

const FilmDetails = () => {
  const fields = [
    { label: "Episode", key: "episode_id" },
    { label: "Director", key: "director" },
    { label: "Producer", key: "producer" },
    { label: "Release Date", key: "release_date" },
    { label: "Opening Crawl", key: "opening_crawl" },
  ];

  return <Details endpoint="films" resourceType="film" fields={fields} />;
};

export default FilmDetails;
