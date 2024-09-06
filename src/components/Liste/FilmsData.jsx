import React from "react";
import DataList from "./DataList";

const FilmsData = () => {
  const fields = [
    { label: "Title", key: "title" },
    { label: "Episode ID", key: "episode_id" },
    { label: "Opening Crawl", key: "opening_crawl" },
    { label: "Director", key: "director" },
    { label: "Producer", key: "producer" },
    { label: "Release Date", key: "release_date" },
  ];

  return <DataList endpoint="films" title="Films" fields={fields} />;
};

export default FilmsData;
