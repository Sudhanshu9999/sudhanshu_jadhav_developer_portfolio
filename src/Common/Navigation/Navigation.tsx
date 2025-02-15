import React from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../../ContextAPI/MenuContext';
import DarkLightModeToggle from "../DarkLightModeToggle/DarkLightModeToggle";
import './Navigation.css';

const Navigation: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="logo nav-item">Sudhanshu Jadhav</Link>
        <div className="nav-items">
          <DarkLightModeToggle />
          <a href="/Files/SDE - Sudhanshu Jadhav.pdf" download className="nav-item">Résumé</a>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          {/* <Link to="/contact" className="nav-item">Contact</Link> */}
        </div>
        <div className="mobile-icon">
          <div>
            <DarkLightModeToggle />
          </div>
          <div onClick={toggleMenu} style={{ 'paddingLeft': '10px' }}>
            &#9776;
          </div>
        </div>
      </nav>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>&times;</div>
        <a href="/Files/SDE - Sudhanshu Jadhav.pdf" download className="nav-item">Résumé</a>
        <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
        <Link to="/projects" className="nav-item" onClick={toggleMenu}>Projects</Link>
        {/* <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link> */}
      </div>
    </>
  );
};

export default Navigation;
