import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing FontAwesome icons
import './FloatingContactButton.css'; // Import the shared Pages.css for dark mode styling

const FloatingContactButton: React.FC = () => {
  const [showContactBox, setShowContactBox] = useState(false);

  const handleButtonClick = () => {
    setShowContactBox(!showContactBox); // Toggle the contact box visibility
  };

  return (
    <div className="contact-container">
      {/* Floating button */}
      <div className="floating-contact-button" onClick={handleButtonClick}>
        <FaPhoneAlt size={24} />
      </div>

      {/* Contact box */}
      {showContactBox && (
        <div className="contact-box">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt size={20} />
              <span>+1 (682) 405-3399</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={20} />
              <a href="mailto:sudjadhav14@gmail.com">sudjadhav14@gmail.com</a>
            </div>
            <div className="contact-item">
              <FaLinkedin size={20} />
              <a href="https://www.linkedin.com/in/sudhanshu-jadhav/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="close-button" onClick={handleButtonClick}>
            ×
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingContactButton;
