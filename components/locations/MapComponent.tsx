import React, { useEffect } from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";
interface MapProps {
  coords: [number, number];
  title: string;
}

const MapComponent: React.FC<MapProps> = ({ coords }) => {
  useEffect(() => {
    delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;

    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <ReactLeaflet.MapContainer
      center={coords}
      zoom={15}
      scrollWheelZoom={false}
      style={{
        height: "20rem",
      }}
    >
      <ReactLeaflet.TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ReactLeaflet.Marker position={coords}>
        <ReactLeaflet.Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </ReactLeaflet.Popup>
      </ReactLeaflet.Marker>
    </ReactLeaflet.MapContainer>
  );
};

export default MapComponent;
