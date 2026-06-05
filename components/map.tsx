"use client";

import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
  center: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  markerTitle?: string;
  markerDescription?: string;
}

export function Map({
  center,
  zoom = 15,
  markerPosition,
  markerTitle = "AURA EXPRESS AFRICA LTD",
  markerDescription = "Majengo, Mombasa, Kenya",
}: MapProps) {
  useEffect(() => {
    // Fix leaflet CSS loading
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)
      ._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", minHeight: "400px" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPosition && (
        <Marker position={markerPosition} icon={icon}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-foreground">{markerTitle}</p>
              <p className="text-sm text-muted-foreground">
                {markerDescription}
              </p>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
