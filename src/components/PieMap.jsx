import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';




const HeatmapLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const heatLayer = L.heatLayer(data, {
      radius: 40,
      blur: 15,
      maxZoom: 10,
      max: 1.0,
      gradient: {
        0.0: 'blue',
        0.25: 'lime',
        0.5: 'yellow',
        0.75: 'orange',
        1.0: 'red',
      },
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, data]);

  return null;
};

const MapComponent = ({ position, setPosition, GetCoordinates }) => {
  const [mapCenter, setMapCenter] = useState([56, -5]); // Default center to India
  const [heatmapData, setData] = useState(
    [
    [19.0760, 72.8777, 1],   
    [28.7041, 77.1025, 1],   
    [13.0827, 80.2707, 1],  
    [22.5726, 88.3639, 1],  
    [12.9716, 77.5946, 1],   
    [18.5204, 73.8567, 1],   ]);

  useEffect(()=>{
    const fetchData=async () => {
      const data=await GetCoordinates();
      //console.log(data)
      const newData=data.map((Coordinate)=>{
        // return [1,2,1]
          return [Coordinate['Latitude'],Coordinate['Longitude'],1]
        })
        //console.log(newData);
        setData(newData);
    };
    fetchData();
  }, []);





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
        setPosition(e.latlng);  // Only update marker position, don't modify heatmap data
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <MapContainer
      className="rounded-xl border border-bg-PrimaryBlue z-0 shadow-xl"
      center={mapCenter}
      zoom={5}
      style={{ height: '400px', width: '450px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <HeatmapLayer data={heatmapData} />
    </MapContainer>
  );
};

export default MapComponent;
