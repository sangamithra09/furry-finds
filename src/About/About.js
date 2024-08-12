import React from 'react';
import './About.css'; // Optional: for additional styling
import aboutus from '../Assets/aboutus.png';

const About = () => {
  return (
    <div className="aimage-container">
      <img src={aboutus} alt="Description of Image" />
    </div>
  );
};

export default About;
