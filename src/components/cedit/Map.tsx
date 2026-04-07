import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Fix for default marker icon in Leaflet with Vite/Webpack
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  className?: string;
}

export default function Map({ className }: MapProps) {
  const position: [number, number] = [8.2464, -73.3517];

  return (
    <div className={`w-full h-[400px] rounded-2xl overflow-hidden border border-border shadow-lg ${className}`}>
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <strong className="block font-grotesk text-sm">UFPS Seccional Ocaña</strong>
              <span className="text-xs text-muted-foreground">Ocaña, Norte de Santander</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

