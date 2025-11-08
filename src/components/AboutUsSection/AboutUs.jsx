import React from 'react';
import './AboutUs.css'; // Importing plain CSS

const AboutUs = () => {
  return (
    <div className="aboutus-container2">
      <div className="aboutus-inner2">
        
        {/* Left Side Image */}
        <div className="aboutus-image2">
          <img src="/homeAboutUS.jpg" alt="About Us" />
        </div>

        {/* Right Side Content */}
        <div className="aboutus-content2">
          {/* Heading */}
          <div className="aboutus-heading2">
            <h1>About</h1>
            <h1 className="highlight2">Us</h1>
          </div>

          {/* Paragraph */}
          <p className="aboutus-text2">
            “At Infinova Global, we unite education, strategy, and innovation to empower people and businesses. 
            Through Eduventures, we make students job-ready. With Consultants, we help corporates grow stronger. 
            And with Technologies, we deliver future-driven solutions. Our vision is simple — nurture talent, 
            boost growth, and transform the future.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
