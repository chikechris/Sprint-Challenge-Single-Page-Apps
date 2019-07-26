import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        setCharacters([...res.data.results]);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      {locations.map(location, id => (
        <LocationCard location={location} key={id} />
      ))}
    </div>
  );
}
