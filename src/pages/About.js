import React from 'react';

const About = () => {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>Learn more about our venue and team.</p>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_R-jGfpmCHo?si=E7zlmKTrH5HyGXCR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;