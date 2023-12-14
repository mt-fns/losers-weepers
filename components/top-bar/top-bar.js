import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import to useNavigate
import './top-bar.css';
import logo from '../../assests/winner-logo.png'; // Ensure your logo path is correct

export default function TopBar() {
  const navigate = useNavigate(); // Updated to use the useNavigate hook

  // Function to handle the click event
  const navigateToRoot = () => {
    navigate('/'); // Use navigate to go to the root page
  };

  return (
    <div className="topbar" onClick={navigateToRoot}>
      {' '}
      {/* Added onClick event here */}
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logo} alt="Losers Weepers Logo" className="logo" />{' '}
          {/* Logo image */}
          <span className="heading">Losers Weepers</span>
        </div>
        <div className="topRight">{/* Your topRight content */}</div>
      </div>
    </div>
  );
}
