import React from 'react';
import './TrainerCard.css';

const TrainerCard = ({ 
  image, 
  name, 
  title,
  verified,
  experience,
  expertise,
  description
}) => {
  return (
    <div className="trainer-card">
      <div className="trainer-image-section">
        <div className="trainer-image-wrapper">
          <img 
            src={image} 
            alt={name}
            className="trainer-image"
          />
        </div>
      </div>
      
      <div className="trainer-content">
        <div className="trainer-header">
          <h3 className="trainer-name">
            {name}
            {verified && (
              <span className="verified-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#2563eb"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            )}
          </h3>
          <p className="trainer-title">{title}</p>
        </div>
        
        <div className="trainer-badges">
          <span className="badge">{experience}</span>
          <span className="badge">{expertise}</span>
        </div>
        
        <p className="trainer-description">{description}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
