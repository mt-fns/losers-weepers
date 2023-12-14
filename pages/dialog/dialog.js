import React from 'react';
import '../map/map.css';

const Dialog = ({ coordinates, isInBound, onClose, onNavigate }) => {
  const handleNavigate = () => {
    onNavigate('/form', { state: { coordinates } });
  };

  const handleClose = () => {
    onNavigate('/');
  };
  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        {isInBound ? (
          <>
            <p>Congrats you’ve guessed it right!</p>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
            <button onClick={handleClose} id="riddle-btn">
              You're Welcome
            </button>
          </>
        ) : (
          <>
            <p>Oops you’ve guessed it wrong.</p>
            <button onClick={handleNavigate} id="riddle-btn">
              Riddle Time
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dialog;
