import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Polygon, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ position, setPosition, getData }) => {
  const [mapCenter, setMapCenter] = useState([11.5937, 70.9629]); // Default center to India

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
        setPosition(e.latlng);

        // Getting coordinates of the location selected on the map
        const object = {features: [position.lat, position.lng]}
        getData(object)
        console.log(position.lat);  
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  // Define the coordinates of the polygon (e.g., a triangle or rectangle)
  const polygonCoordinates = [
    [8, 71.6],
    [8, 73.7],
    [15, 71.6],
    [15, 73.7]
  ];

  return (
    <MapContainer
      className="rounded-xl border border-bg-PrimaryBlue z-0 shadow-xl"
      center={mapCenter}
      zoom={6}
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
