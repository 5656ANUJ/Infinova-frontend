import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ image, quote, name, role }) => {
  return (
    <div className="new-testimonial-card-wrapper">
      <div className="new-testimonial-img-section">
        <div className="new-testimonial-img-container">
          <img 
            src={image} 
            alt={name}
            className="new-testimonial-user-img"
          />
        </div>
      </div>
      
      <div className="new-testimonial-text-content">
        <div className="new-testimonial-quote-block">
          <svg className="new-testimonial-quote-icon" width="40" height="32" viewBox="0 0 40 32" fill="none">
            <path d="M0 17.6923C0 12.8205 1.17949 8.76923 3.53846 5.53846C5.89744 2.30769 9.43589 0 14.1538 0V4.92308C11.7949 4.92308 9.94872 5.74359 8.61538 7.38462C7.28205 9.02564 6.61538 11.0769 6.61538 13.5385H14.1538V32H0V17.6923ZM25.8462 17.6923C25.8462 12.8205 27.0256 8.76923 29.3846 5.53846C31.7436 2.30769 35.2821 0 40 0V4.92308C37.641 4.92308 35.7949 5.74359 34.4615 7.38462C33.1282 9.02564 32.4615 11.0769 32.4615 13.5385H40V32H25.8462V17.6923Z" fill="#E5E7EB"/>
          </svg>
          <p className="new-testimonial-quote-text">{quote}</p>
        </div>
        
        <div className="new-testimonial-author-info">
          <h3 className="new-testimonial-author-name">{name}</h3>
          <p className="new-testimonial-author-title">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
