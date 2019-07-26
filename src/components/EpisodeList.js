import React, { useState, useEffect } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        //console.log('results', result);
        setEpisodeList(res.data.results);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      {episodeList.map(episode => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </div>
  );
}
