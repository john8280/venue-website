import React from 'react';
import weddingImage from '../assets/wedding.jpg';
import djImage from '../assets/dj-party.jpg';
import corporateImage from '../assets/corporate-event.jpg';

const Services = () => {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>We host weddings, corporate events, and more!</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
        <div>
          <img src={weddingImage} alt="Wedding" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Weddings</h3>
        </div>
        <div>
          <img src={djImage} alt="DJ Party" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>DJ Parties</h3>
        </div>
        <div>
          <img src={corporateImage} alt="Corporate Event" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Corporate Events</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;