import React, { useState, useEffect } from 'react';
import riddles from './riddles.json';
import './form-page.css';
import { useLocation } from 'react-router-dom';
const FormPage = () => {
  const location = useLocation();
  const coordinates = location.state?.coordinates;
  const [selectedRiddles, setSelectedRiddles] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Function to get a random set of riddles
    const getRandomRiddles = (num = 3) => {
      const shuffled = [...riddles].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    setSelectedRiddles(getRandomRiddles());
  }, []);

  const handleChange = (e) => {
    setUserAnswers({ ...userAnswers, [e.target.name]: e.target.value });
  };


  function generateRandomCoordinatesSydney() {
    // Sydney, Australia approximate bounding box
    const latMin = -34.118347, latMax = -33.578141;
    const lngMin = 150.520929, lngMax = 151.343021;

    // Generate random latitude and longitude within the bounding box
    const latitude = Math.random() * (latMax - latMin) + latMin;
    const longitude = Math.random() * (lngMax - lngMin) + lngMin;

    return { latitude, longitude };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let allAnswered = selectedRiddles.every((riddle) => userAnswers[riddle.id]);
    let isCorrect = allAnswered;

    for (const riddle of selectedRiddles) {
      if (
        userAnswers[riddle.id]?.trim().toLowerCase() !==
        riddle.answer.toLowerCase()
      ) {
        isCorrect = false;
        break;
      }
    }

    if (!allAnswered) {
      setFeedback('Please answer all riddles.');
    } else {
      if (isCorrect) {
        setFeedback(
          <>
            {' '}
            <p>All answers are correct!</p>
            <p>Latitude: {coordinates?.lat}</p>
            <p>Longitude: {coordinates?.lng}</p>
          </>,
        );
      } else {
        setFeedback(
          <>
            Congrats! Your item is now out for collection on{' '}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </>,
        );
        // make the request to tweet
        try {
          // generate a new long and lat
          const randomCoordinates = generateRandomCoordinatesSydney();

          console.log(randomCoordinates)
          const response = await fetch('http://localhost:3001/tweet', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              coordinates: { lat: randomCoordinates.latitude, lng: randomCoordinates.longitude }
            })
          });

          if (response.ok) {
            console.log('Function triggered successfully');
          } else {
            console.error('Failed to trigger function');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };

  return (
    <div className="form-page-container">
      <h1 className="title">Riddle Me This!</h1>
      <form onSubmit={handleSubmit} className="riddles-form">
        {selectedRiddles.map((riddle) => (
          <div key={riddle.id} className="riddle">
            <p className="riddle-question">{riddle.question}</p>
            <input
              type="text"
              name={riddle.id}
              onChange={handleChange}
              placeholder="Your Answer"
              value={userAnswers[riddle.id] || ''}
            />
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit Answers
        </button>
        {feedback && <p className="feedback">{feedback}</p>}
      </form>
    </div>
  );
};

export default FormPage;
