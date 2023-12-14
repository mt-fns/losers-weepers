import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map from './pages/map/map.js';
import FormPage from './pages/riddles/form-page.js';
import SideBar from './components/side-bar/side-bar.js';
import TopBar from './components/top-bar/top-bar.js';
import ContactUs from './pages/contact-us/contact-us.js';
import FAQPage from './pages/faqs/faqs.js';
import AboutUs from './pages/about-us/about-us.js';

const App = () => {
  const mapOptions = {
    center: { lat: -33.917325, lng: 151.230803 },
    zoom: 10,
  };

  return (
    <div className="main-content">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="side-bar-container">
        <SideBar />
      </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Map options={mapOptions} />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
