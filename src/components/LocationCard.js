import React from "react";

import styled from "styled-components";

const StyleLocationCard = styled.div`
  box-shadow: 1px 1px 9px 2px #234888;
  border-radius: 5px;
  border: 1px solid grey;

  width: 350px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H3 = styled.h3`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  font-size: 2.2rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
`;

const H4 = styled.h4`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  font-size: 1.2rem;
  padding: 0;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const P = styled.p`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  background-color: gray;
  display: block;
  margin-left: auto;
`;

export default function LocationCard({ location }) {
  // image={image}
  return (
    <StyleLocationCard>
      <H3>{location.name}</H3>
      <H4>{location.type}</H4>
      <P>{location.residents.length} residents</P>
    </StyleLocationCard>
  );
}
