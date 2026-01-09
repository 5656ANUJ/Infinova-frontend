import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // Closes the menu
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="outerNavDiv">
      
      {/* Sidebar Overlay */}
      <div 
        className={`overlay ${open ? 'open' : ''}`} 
        onClick={handleClick}
      >
        {/* Sidebar Menu */}
        <div 
          id="mobile-menu"
          className={`menu ${open ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="logoDiv">
            <button
              type="button"
              onClick={handleClick}
              className="close"
              aria-label="Close menu"
            >
              <img
                src="/close.png"
                alt=""
                className="close-icon"
              />
            </button>
            <img
              src="/global_Logo_black.png"
              alt="Logo"
              className="navbarImage"
            />
          </div>

          <ul className="menuList">
            <NavLink to="/eduventures">
              <li className="listItems" onClick={closeMenu}>
                Eduventures
              </li>
            </NavLink>
            <NavLink to="/coming-soon">
              <li className="listItems" onClick={closeMenu}>
                Consultants
              </li>
            </NavLink>
            <NavLink to="/coming-soon">
              <li className="listItems" onClick={closeMenu}>
                Technology
              </li>
            </NavLink>
            <NavLink to="/coming-soon">
              <li className="listItems" onClick={closeMenu}>
                Mission
              </li>
            </NavLink>
            <NavLink to="/coming-soon">
              <li className="listItems" onClick={closeMenu}>
                Vision
              </li>
            </NavLink>
            <NavLink to="/coming-soon">
              <li className="listItems" onClick={closeMenu}>
                Blog
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/* Navbar Content */}
      <div className="innerNavDiv">
        <div className="navbar-left-group">
          <button
            type="button"
            onClick={handleClick}
            className="hamburgerIcon2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <img
              src="/toggler.png"
              alt="" 
              className="hamburger-icon-img, ham"
            />
          </button>
          
          <NavLink to="/">
            <img
              src="/global_Logo_black.png"
              alt="Global Logo"
              className="globalIcon2"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbarList2">
          <ul>
            <NavLink to="/about-us">
              <li>About Us</li>
            </NavLink>
            <NavLink to="/careers">
              <li>Careers</li>
            </NavLink>
            <NavLink to="/contact-us">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;