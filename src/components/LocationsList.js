import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px auto;
`;

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        setLocations([...res.data.results]);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <Div>
      {locations.map(location => (
        <LocationCard location={location} key={location.id} />
      ))}
    </Div>
  );
}
