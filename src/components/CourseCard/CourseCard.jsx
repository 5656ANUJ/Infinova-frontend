import React from 'react';
import './CourseCard.css';

const CourseCard = ({ 
  image, 
  title, 
  duration, 
  durationValue,
  additionalInfo,
  additionalInfoValue,
  downloadLink 
}) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img 
          src={image} 
          alt={title}
          className="course-image"
        />
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        
        <div className="course-details">
          <p className="course-info">
            <span className="info-label">{duration}:</span> {durationValue}
          </p>
          
          {additionalInfo && (
            <p className="course-info">
              <span className="info-label">{additionalInfo}:</span> {additionalInfoValue}
            </p>
          )}
        </div>
        
        <a 
          href={downloadLink} 
          download
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg 
            className="download-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Brochure
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
