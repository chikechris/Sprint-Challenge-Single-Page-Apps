import React from "react";
//import { Link } from "react-router-dom";

import styled from "styled-components";

const DivCharacters = styled.div`
  font-family: "Serif", "Georgia";
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const H3 = styled.h3`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  font-size: 1.3rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;

const H4 = styled.h4`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  font-size: 1rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;
const ImageCharacter = styled.img`
  width: 250px;
  border-radius: 20px;
`;

const P = styled.p`
  text-align: center;
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
`;

export default function CharacterCard({ character }) {
  return (
    <DivCharacters>
      <ImageCharacter src={character.image} alt={character.name} />
      <H3>{character.name}</H3>
      <H4>
        {character.species} {character.status}
      </H4>
      <P>Location: {character.location.name}</P>
      <P>Origin: {character.origin.name}</P>
      {console.log(character)}
    </DivCharacters>
  );
}
