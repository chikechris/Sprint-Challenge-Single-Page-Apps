import React from "react";

import styled from "styled-components";

const StyleLocationCard = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  margin-left: 270px;
  background-color: gray;
`;

export default function LocationCard({ location }) {
  // image={image}
  return (
    <StyleLocationCard>
      <h3>{location.name}</h3>
      <h4>{location.type}</h4>
      <P>{location.residents.length} residents</P>
    </StyleLocationCard>
  );
}
