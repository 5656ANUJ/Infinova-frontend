import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const FooterAnuj = () => {
  
  return (
    <footer className="footer-wrapper">
      {/* ===== Upper Blue Section ===== */}
      <div className="footer-upper-section">
        <div className="footer-upper-inner">
          <div className="footer-upper-left">
            <h2>Consulting Agency For Your Business</h2>
            <p>
              Unlock your company's full potential with our data-driven
              strategies.
            </p>
          </div>
          <div className="footer-upper-right">
            <button className="footer-contact-btn">Contact Us</button>
          </div>
        </div>
      </div>

      {/* ===== Main Lower Section with 3 Columns ===== */}
      <div className="footer-lower-section">
        {/* A SINGLE .footer-content holds ALL three columns */}
        <div className="footer-content">
          {/* Column 1: Our Divisions */}
          <div className="footer-section">
            <h3 className="footer-links-title">Our Divisions</h3>
            <ul className="footer-links">
              <li>
                <NavLink to="/eduventures/forstudents"
               className="cursor-pointer hover:text-blue-600 transition-colors " >Infinova Eduventures
            </NavLink>
              </li>
              <li>
               <NavLink to="/coming-soon"
               className="cursor-pointer hover:text-blue-600 transition-colors " >Infinova Consultants
            </NavLink>
              </li>
              <li>
               <NavLink to="/coming-soon"
               className="cursor-pointer hover:text-blue-600 transition-colors " >Infinova technologies
            </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick links */}
          <div className="footer-section">
            <h3 className="footer-links-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
    <NavLink to="/courses" className="cursor-pointer hover:text-blue-600 transition-colors">
      Courses
    </NavLink>
  </li>
  <li>
    <NavLink to="/coming-soon" className="cursor-pointer hover:text-blue-600 transition-colors">
      Internships
    </NavLink>
  </li>
  <li>
    <NavLink to="/careers" className="cursor-pointer hover:text-blue-600 transition-colors">
      Career
    </NavLink>
  </li>
  <li>
    <NavLink to="/coming-soon" className="cursor-pointer hover:text-blue-600 transition-colors">
      Hiring Solutions
    </NavLink>
  </li>
  <li>
    <NavLink to="/coming-soon" className="cursor-pointer hover:text-blue-600 transition-colors">
      Privacy Policy
    </NavLink>
  </li>
  <li>
    <NavLink to="/coming-soon" className="cursor-pointer hover:text-blue-600 transition-colors">
      Terms & Conditions
    </NavLink>
  </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="footer-section">
            <h3 className="footer-links-title">Get In Touch</h3>
            <ul className="footer-links">
              <li className="footer-contact-item">
                <img src="../../public/telephone.png" alt="Phone" />
                <p>+91 9881068668</p>
              </li>
              <li className="footer-contact-item">
                <img src="../../public/location.png" alt="Location" />
                <div>
                  <p>  Head office address: Cidco,
                  Chh.Sambhajinagar/Aurangabad,
                  Maharashtra-431001</p>
                </div>
              </li>
              <li className="footer-contact-item">
                <img src="../../public/mail.png" alt="Email" />
                <p>Infinovaeduventures@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Bottom Copyright & Social Icons Section ===== */}
      <div className="footer-bottom-section {">
        <p className="footer-copyright">&copy; 2025 Infinova Global. All rights reserved.</p>
        <div className="footer-social-icons">
          <a href="#" aria-label="Facebook">
            <img src="../../public/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/infinova_eduventures?igsh=MTRuNG9wN2F4NG9kNw==" aria-label="Instagram">
            <img src="../../public/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/infinovaeduventures/" aria-label="Instagram">
            <img src="../../public/linkedin.png" alt="Linkedin" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="../../public/twitter.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="../../public/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterAnuj;
