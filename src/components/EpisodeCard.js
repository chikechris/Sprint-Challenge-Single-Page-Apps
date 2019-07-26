import React from "react";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: 1px 1px 9px 2px #234888;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 2.2rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export default function EpisodeCard({ episode }) {
  return (
    <Div>
      <H3>{episode.name}</H3>
      <H4>Episode: {episode.episode}</H4>
      <H4>Air Date: {episode.air_date}</H4>
    </Div>
  );
}
