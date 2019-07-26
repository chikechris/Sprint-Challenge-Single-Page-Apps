import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import EpisodeCard from "./EpisodeCard";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px auto;
`;

export default function EpisodeList() {
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        setEpisodeList(res.data.results);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <Div>
      {episodeList.map(episode => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </Div>
  );
}
