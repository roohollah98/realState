import React, {
    useRef,
    useMemo,
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
  
  function DraggableMarker({ coordinate, setCoordinate }) {
    
      
   

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setCoordinate(marker.getLatLng());
          }
        },
      }),
      []
    );
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={coordinate}
        icon={defaultIcon}
        ref={markerRef}
      >
        <Popup minWidth={90}>"your home address"</Popup>
      </Marker>
    );
}
  const MapTwo = ({ coordinate, setCoordinate }) => {
    
   
    return (
        <>

      <MapContainer center={coordinate} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        <DraggableMarker coordinate={coordinate} setCoordinate={setCoordinate} />
        
      </MapContainer>
    
        </>
    );
  };
  
  export default MapTwo;
  