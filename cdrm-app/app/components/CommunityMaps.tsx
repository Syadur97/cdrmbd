"use client"; // must be at the top

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Sample GeoJSON
const communities = [
  { id: 1, name: "Dhaka", lat: 23.8103, lng: 90.4125 },
  { id: 2, name: "Chittagong", lat: 22.3569, lng: 91.7832 },
  { id: 3, name: "Khulna", lat: 22.8456, lng: 89.5403 },
  { id: 4, name: "Sylhet", lat: 24.8949, lng: 91.8687 }
];

export default function CommunityMap() {
  return (
    <div className="w-full h-[600px]">
      <MapContainer center={[23.685, 90.3563]} zoom={6} className="w-full h-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {communities.map((c) => (
          <Marker key={c.id} position={[c.lat, c.lng]}>
            <Popup>{c.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
