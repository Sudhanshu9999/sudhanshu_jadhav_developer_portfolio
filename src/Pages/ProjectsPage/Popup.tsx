import React from 'react';
import './Popup.css';

// Define the type for the content object
interface ProjectContent {
  title: string;
  description: string;
  detailedDescription: string;
  techIcons: JSX.Element[];
  keyOutcomes: string[];
}

interface PopupProps {
  content: ProjectContent;  // Now accepting a ProjectContent object
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, closePopup }) => {
  return (
    <div className="popup-overlay show" onClick={closePopup}>
      <div className="popup-box show" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closePopup}>×</button>
        <h2>{content.title}</h2> {/* Now accessing title from content */}
        <div className="popup-content">
          <p>{content.description}</p>
          <div className="techIcons">{content.techIcons}</div>
          <h3>Detailed Description:</h3>
          <p>{content.detailedDescription}</p>
          <h3>Key Outcomes:</h3>
          <ul>
            {content.keyOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Popup;
