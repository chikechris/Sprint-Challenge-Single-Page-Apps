import React from "react";

export default function EpisodeCard({ episode }) {
  return (
    <div>
      <h3>{episode.name}</h3>
      <h4>Episode: {episode.episode}</h4>
      <h4>Air Date: {episode.air_date}</h4>
    </div>
  );
}
