import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const { name, status, species } = character;
  return (
    <div className="character-card">
      <Link to={`/characters/${character.id}`}>
        <h2>{name}</h2>
      </Link>
      <div className="species-status">
        <p>
          {species} {status}
        </p>
      </div>
    </div>
  );
}
