/** @format */

import React, { useState } from "react";

const LocationSelector = ({ onLocationChange }) => {
  const [currentLocation, setCurrentLocation] = useState("Delhi");

  const locations = {
    Azamgarh: { latitude: 26.0732, longitude: 83.1859 },
    Varanasi: { latitude: 25.3176, longitude: 82.9739 },
    Lucknow: { latitude: 26.8467, longitude: 80.9462 },
    Delhi: { latitude: 28.7040592, longitude: 77.10249019999999 },
    Mumbai: { latitude: 19.076, longitude: 72.8777 },
    Bangalore: { latitude: 12.9716, longitude: 77.5946 },
    Hyderabad: { latitude: 17.385044, longitude: 78.486671 },
    Chennai: { latitude: 13.0827, longitude: 80.2707 },
    Kolkata: { latitude: 22.5726, longitude: 88.3639 },
    Ahmedabad: { latitude: 23.0225, longitude: 72.5714 },
    Pune: { latitude: 18.5204, longitude: 73.8567 },
    Jaipur: { latitude: 26.9124, longitude: 75.7873 },

    Chandigarh: { latitude: 30.7333, longitude: 76.7794 },
    Bhopal: { latitude: 23.2599, longitude: 77.4126 },
    Indore: { latitude: 22.7196, longitude: 75.8577 },
    Patna: { latitude: 25.5941, longitude: 85.1376 },
    Surat: { latitude: 21.1702, longitude: 72.8311 },
    Kochi: { latitude: 9.9312, longitude: 76.2673 },
    Thiruvananthapuram: { latitude: 8.5241, longitude: 76.9366 },
  };

  const handleLocationChange = (e) => {
    const selectedCity = e.target.value;
    setCurrentLocation(selectedCity);
    onLocationChange(locations[selectedCity]);
  };

  return (
    <select
      className="text-sm rounded p-2"
      value={currentLocation}
      onChange={handleLocationChange}
      style={{ width: "200px" }}
    >
      {Object.keys(locations).map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default LocationSelector;
