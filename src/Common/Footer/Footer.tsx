import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Links Section */}
        <div className="footer-links">
          <ul>
          <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About Me</Link></li>
            <li><Link to="/projects" className="nav-item">Projects</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/sudhanshu-jadhav/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sudhanshu9999" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sudhanshu Jadhav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
