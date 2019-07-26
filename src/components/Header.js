import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  text-shadow: 0 0 1px #ff0000, 0 0 2px #0000ff;
  font-size: 3rem;
  font-weight: 900;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <H1>Rick &amp; Morty Fan Page</H1>
    </header>
  );
}
