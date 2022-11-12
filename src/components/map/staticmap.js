import React, {
  useRef,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { defaultIcon } from "../../assets/icons/defaulticon";
import "./map.css";

function StaticMarker({ coordinate }) {
  
  const markerRef = useRef(null);
  

  return (
    <Marker
      
      position={coordinate}
      icon={defaultIcon}
      ref={markerRef}
    >
      <Popup minWidth={90}>"your home address"</Popup>
    </Marker>
  );
}
const Map = ({ coordinate }) => {
  return (
    <MapContainer center={coordinate} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <StaticMarker coordinate={coordinate}  />
    </MapContainer>
  );
};

export default Map;
