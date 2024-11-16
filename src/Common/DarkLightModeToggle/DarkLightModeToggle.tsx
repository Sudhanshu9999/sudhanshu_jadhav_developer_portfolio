import React, { useState, useEffect } from "react";
import { Sun, Moon } from 'react-feather'; // Import Feather Icons
import "./DarkLightModeToggle.css";

const DarkLightModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Apply the dark mode class to the body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode); 
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleMode} className={`toggle-button ${isDarkMode ? "dark" : "light"}`}>
        {/* Moon icon should be visible on the left side when in dark mode */}
        <div className={`icon-container moon-container ${isDarkMode ? "visible" : ""}`}>
          <Moon className="toggle-icon moon" />
        </div>

        {/* Sun icon should be visible on the right side when in light mode */}
        <div className={`icon-container sun-container ${isDarkMode ? "" : "visible"}`}>
          <Sun className="toggle-icon sun" />
        </div>

        {/* Toggle ball moves left and right */}
        <div className={`toggle-ball ${isDarkMode ? "move-right" : "move-left"}`}></div>
      </button>
    </div>
  );
};

export default DarkLightModeToggle;
