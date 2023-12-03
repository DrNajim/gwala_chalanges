import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LocationMap = () => {
  const [location, setLocation] = useState(null);
  const [customLocation, setCustomLocation] = useState('');

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const position = await getCurrentLocation();
      setLocation(position);
    } catch (error) {
      console.error('Error getting location:', error.message);
    }
  };

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ lat: latitude, lng: longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by your browser'));
      }
    });
  };

  const handleCustomLocationChange = (event) => {
    setCustomLocation(event.target.value);
  };

  const handleCustomLocationSubmit = () => {
    // Implement logic to handle custom location input (e.g., geocoding)
    // For simplicity, you can set the custom location directly in the state
    setLocation({ lat: 0, lng: 0 }); // Replace with actual geocoding logic
  };

  return (
    <div>
      <div>
        <label>
          Custom Location:
          <input type="text" value={customLocation} onChange={handleCustomLocationChange} />
        </label>
        <button onClick={handleCustomLocationSubmit}>Set Location</button>
      </div>
      <div style={{ height: '70vh', width: '100%' }}>
        {location && (
          <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
