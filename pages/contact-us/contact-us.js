import React, { useState } from 'react';
import './contact-us.css';
import VirtualAssistantDialog from '../../components/virtual-assistant-dialog/virtual-assistant-dialog.js';
const ContactUs = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };
  return (
    <div className="contact-container">
      <main className="contact-content">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>Email: ZanyZeeprs.11@loserweepers.com</p>
          <p>Phone: +61 02 9385 2864</p>
          <div className="virtual-assistant">
            <button onClick={toggleDialog}>
              Click here for Virtual Assistant :)
            </button>
          </div>
          <VirtualAssistantDialog isOpen={dialogOpen} onClose={toggleDialog} />
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
