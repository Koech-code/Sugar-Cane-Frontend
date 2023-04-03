import React, { useState, useEffect } from "react";
import axios from "axios";

function LocationTracker() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    // Get the user's current location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        // If the Geolocation API is not available or the user declines to share their location,
        // use the IPify Geolocation API to get the user's location based on their IP address.
        axios
          .get(
            "https://geo.ipify.org/api/v2/country?apiKey=at_DNAJ1Vk7y6npwyxudp9NHRML8UKYc&ipAddress=8.8.8.8"
          )
          .then((response) => {
            setLocation({
              latitude: response.data.location.lat,
              longitude: response.data.location.lng,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }, []);

  return (
    <div>
      <h1>Live Location Tracker</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>Location: {location.region}</p>
    </div>
  );
}

export default LocationTracker;
