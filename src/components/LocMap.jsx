import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ position, setPosition }) => {
  const [mapCenter, setMapCenter] = useState([20.5937, 78.9629]); // Default center to India

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setMapCenter([latitude, longitude]);
          setPosition([latitude, longitude]);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, []);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);  // Only update marker position
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  // Define the coordinates of the polygon (e.g., a triangle or rectangle)
  const polygonCoordinates = [
    [8, 73],
    [15,76],
    [8, 76],
    [15, 73]
  ];

  return (
    <MapContainer
      className="rounded-xl border border-bg-PrimaryBlue z-0 shadow-xl"
      center={mapCenter}
      zoom={5}
      style={{ height: '350px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      
      {/* Add a polygon to the map with customized color and opacity */}
      <Polygon
        positions={polygonCoordinates}
        pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.3 }} // Styling options
      />
    </MapContainer>
  );
};

export default MapComponent;
