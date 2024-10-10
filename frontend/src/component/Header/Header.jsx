import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SALogo from '../SaLogo';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="logo1">
          <SALogo/>
        </div>

        {/* Hamburger Menu Button */}
        <div 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className={`NavIcon ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <a href="/cv.pdf" download className="btn">Download CV</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Backdrop */}
      {menuOpen && <div className="backdrop open" onClick={toggleMenu}></div>}
    </>
  );
}

export default Header;
