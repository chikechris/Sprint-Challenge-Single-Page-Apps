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

const ImageCharacter = styled.img`
  width: 250px;
  border-radius: 20px;
`;

export default function CharacterCard({ character }) {
  return (
    <DivCharacters>
      <ImageCharacter src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <h4>
        {character.species} {character.status}
      </h4>
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      {console.log(character)}
    </DivCharacters>
  );
}
