import React from 'react';
import './faqs.css';

const FAQPage = () => {
  return (
    <div className="faq-container">
      <main className="main-content">
        <h1 id="title">FAQs</h1>
        <div className="faq">
          <h3>What's my fate if I fail at riddle-solving?</h3>
          <p>
            Brace yourself, as your device location might just become the next
            hot tweet on Twitter! 🐦 😉
          </p>
        </div>
        <div className="faq">
          <h3>How do I guess my device location?</h3>
          <p>
            Just give the map a tap and make your guess. If you're over 5km off,
            it's riddle time! Think of it as a geography test with a twist. 🌍!
          </p>
        </div>
        <div className="faq">
          <h3>Why on earth did you create this wacky game?</h3>
          <p>
            Why not? Sometimes you just need a good riddle in your life... or a
            reason to brush up on your map skills! 🤷‍♂️🌏
          </p>
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
