import React from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../ContextAPI/MenuContext';
import DarkLightModeToggle from "./DarkLightModeToggle";
import './Navigation.css';

const Navigation: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <nav className="navbar-container">
        <div className="logo">MyPortfolio</div>
        <div className="nav-items">
          <DarkLightModeToggle />
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
        <div className="mobile-icon" onClick={toggleMenu}>
          <div>
            <DarkLightModeToggle />
          </div>
          <div>
            &#9776;
          </div>
        </div>
      </nav>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>&times;</div>
        <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
        <Link to="/projects" className="nav-item" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navigation;
