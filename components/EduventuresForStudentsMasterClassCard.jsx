import React from 'react';
import '../global.css';

const MasterClasses = () => {
  const classesData = [
    {
      title: "Resume Building Workshop",
      instructor: "By Mustakim Syed ",
      role: "Corporate Trainer",
      date: "15 Nov 2025 7 PM IST",
      image: "/defaultProfile.svg",
      registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScl18ij5kkwMPqD9nnLUHlGXdHPqyvM6NtyDAWncZN8IQaVew/viewform?usp=send_form" // <— add your Google Form link here
    },
    {
      title: "Launchpad Pharma",
      instructor: "By Sanket",
      role: "Co-Founder, Launchpad Pharma",
      date: "16 Nov 2025 7 PM IST",
      image: "/defaultProfile.svg",
      registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdGckvmttgFXAnyfewIRPkTwJkweMZj0wVMkJb2qQsPHjLuxA/viewform?usp=publish-editor" // <— and here
    }
  ];

  const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false;
    try {
      const u = new URL(url);
      return (
        u.hostname === 'forms.gle' ||
        (u.hostname === 'docs.google.com' && u.pathname.startsWith('/forms'))
      );
    } catch {
      return false;
    }
  };

  return (
    <div className="master-classes-container font family-montserrat">
      <div className="header">
        <h1 className="title">
          Free <span className="highlights">Master Classes</span>
        </h1>
      </div>
      
      <div className="classes-grid">
        {classesData.map((classData, index) => {
          const hasLink = isValidUrl(classData.registerUrl);
          return (
            <div className="class-card" key={index}>
              <div className="card-content">
                <div className="upcoming-badge">Upcoming</div>
                <h2 className="class-title font-bold">{classData.title}</h2>
                
                <div className="instructor-section">
                  <div className="instructor-image">
                    <img 
                      src={classData.image}
                      alt={classData.instructor}
                    />
                  </div>
                  <div className="instructor-info">
                    <div className="instructor-name font-extrabold">{classData.instructor}</div>
                    <div className="instructor-role font-bold">{classData.role}</div>
                  </div>
                </div>
                
                <div className="action-section">
                  {hasLink ? (
                    <a
                      href={classData.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-btn"
                      aria-label={`Register for ${classData.title}`}
                    >
                      Register
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="register-btn disabled"
                      disabled
                      aria-disabled="true"
                      title="Registration link not available"
                    >
                      Register
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}

                  <div className="date-badge">
                    <svg className="calendar-icon" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {classData.date}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasterClasses;
