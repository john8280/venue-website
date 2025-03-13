import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import weddingImage from '../assets/wedding.jpg';
import djImage from '../assets/dj-party.jpg';
import corporateImage from '../assets/corporate-event.jpg';
import heroImage from '../assets/hero.jpg';

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Amazing venue! Our wedding was perfect thanks to the team.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'The best DJ party we’ve ever had. Highly recommend!',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      review: 'Great space for our corporate event. Everything was seamless.',
    },
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Your Dream Event Starts Here</h1>
          <p style={{ fontSize: '1.5rem' }}>Host unforgettable weddings, parties, and corporate events.</p>
          <button
            onClick={() => navigate('/contact')} // Navigate to the Contact page
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              backgroundColor: '#ffcc00',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Event Highlights Section */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Our Events</h2>
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
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2>What Our Clients Say</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{ width: '30%', padding: '1rem', backgroundColor: 'white', borderRadius: '10px' }}
            >
              <p style={{ fontStyle: 'italic' }}>"{testimonial.review}"</p>
              <p style={{ fontWeight: 'bold' }}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action (CTA) Section */}
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <h2>Ready to Host Your Event?</h2>
        <p>Contact us today to book your dream event!</p>
        <button
          onClick={() => navigate('/contact')} // Navigate to the Contact page
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Home;