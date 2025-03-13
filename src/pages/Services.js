import React from 'react';
import weddingImage from '../assets/wedding.jpg';
import djImage from '../assets/dj-party.jpg';
import corporateImage from '../assets/corporate-event.jpg';

const Services = () => {
  return (
    <div className="page" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Our Services</h1>
      <p>We host weddings, corporate events, and more!</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Wedding Event */}
        <div style={{ width: '30%', textAlign: 'center' }}>
          <img
            src={weddingImage}
            alt="Wedding"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <h3>Weddings</h3>
          <p>
            Host your dream wedding with us! Our venue offers a romantic setting, customizable
            packages, and professional event coordination. Perfect for intimate gatherings or
            grand celebrations. Includes options for open bar, catering, and more.
          </p>
        </div>

        {/* DJ Party */}
        <div style={{ width: '30%', textAlign: 'center' }}>
          <img
            src={djImage}
            alt="DJ Party"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <h3>DJ Parties</h3>
          <p>
            Throw the ultimate DJ party at our venue! With state-of-the-art sound systems, vibrant
            lighting, and a spacious dance floor, your guests will have an unforgettable night.
            Cash bar and drink packages available.
          </p>
        </div>

        {/* Corporate Event */}
        <div style={{ width: '30%', textAlign: 'center' }}>
          <img
            src={corporateImage}
            alt="Corporate Event"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <h3>Corporate Events</h3>
          <p>
            Impress your clients and colleagues with a professional corporate event. Our venue
            offers modern facilities, high-speed Wi-Fi, and catering options. Perfect for
            conferences, seminars, or team-building events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;