import React from 'react';
import './virtual-assistant-dialog.css';

const VirtualAssistantDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const joke =
    "Expecting a virtual assistant? Well, we tried downloading one, but we're still waiting for it to get past the 'human sense of humor' update. Might take a while!";

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h2>Silly You!</h2>
        <p>{joke}</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default VirtualAssistantDialog;
