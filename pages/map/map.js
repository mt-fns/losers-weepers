import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from './../dialog/dialog.js'; // Import the Dialog component
import './map.css';
import '../dialog/dialog.css';

const Map = ({ options }) => {
  const realLongLat = { lng: 151.230803, lat: -33.917325 };
  const ref = useRef();
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [isInBound, setIsInBound] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, options);

    map.addListener('click', (e) => {
      const clickedCoordinates = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setCoordinates(clickedCoordinates);
      
      new window.google.maps.Marker({
        position: clickedCoordinates,
        map,
        title: "Hello World!",
      });

      setIsInBound(isInBoundFn(clickedCoordinates.lng, clickedCoordinates.lat));

      setShowDialog(true);
    });
  
  }, [options]);

  const handleClose = () => {
    setShowDialog(false);
  };
  function isInBoundFn(long, lat) {
    let longDiff = Math.abs(realLongLat.lng - long);
    let latDiff = Math.abs(realLongLat.lat - lat);

    return longDiff <= 0.005 && latDiff <= 0.005;
  }

  const handleNavigate = (path) => {
    navigate(path, { state: { coordinates: realLongLat } });
    setShowDialog(false);
  };

  return (
    <div>
      <div id="instruction">
      <p >Click to guess the location</p>
      </div>
      <div ref={ref} id="map" />
      {showDialog && (
        <Dialog
          coordinates={realLongLat}
          isInBound={isInBound}
          onClose={handleClose}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};

export default Map;
