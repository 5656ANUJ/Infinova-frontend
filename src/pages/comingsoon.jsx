import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '/global.css';

// Import your images
import logoImage from '/eduventures.png';
import hourglassImage from '/hourglass.png';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const location = useLocation();

  // Always scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNotify = () => {
    if (email && email.includes('@')) {
      console.log('Email subscription:', email);
      setIsSubscribed(true);

      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div id="shift" className="coming-soon-container">
      {/* ✅ Only one Header Logo */}
      <header className="header">
        <div className="logo-container">
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Text Section */}
          <div className="text-section">
        <p className="subtitle" style={{ color: '#2D3748' }}>WE'RE STILL</p>
            <h1 className="main-title" style={{ color: '#2D3748' }}>
              Cooking our <span className="highlight">Website</span>
            </h1>
            <p className="description" style={{ color: '#4A5568' }}>
              We are going to launch our website very soon
            </p>
            <p className="stay-tuned">
              <strong>Stay tuned!</strong>
            </p>
          </div>

          {/* Illustration (Hourglass only, ✅ no duplicate logo here) */}
          <div className="illustration-container">
            <img
              src={hourglassImage}
              alt="Cooking website illustration"
              className="illustration"
            />
          </div>

          {/* Email Subscription */}
          <div className="subscription-section">
            <div className="email-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                onKeyPress={(e) => e.key === 'Enter' && handleNotify()}
              />
              <button
                onClick={handleNotify}
                className={`notify-button ${isSubscribed ? 'success' : ''}`}
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  <>
                    <svg className="bell-icon" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M13.73 21A2 2 0 0 1 10.27 21"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Notify
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComingSoon;