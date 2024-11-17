import React, { useEffect } from "react";
import "./ArrowTracker.css"; // Import the CSS for styling

const ArrowTracker: React.FC = () => {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const trail = document.querySelector(".trail") as HTMLElement;
    
          // Adjust the mouse position to account for scroll
          const mouseX = e.clientX + window.scrollX;
          const mouseY = e.clientY + window.scrollY;
    
          // Create a new particle at the adjusted cursor position
          const particle = document.createElement("div");
          particle.classList.add("particle");
          trail.appendChild(particle);
    
          // Set the position of the particle
          particle.style.left = `${mouseX - 5}px`; // Center the particle on the cursor
          particle.style.top = `${mouseY - 5}px`;
    
          // Remove the particle after animation
          setTimeout(() => {
            particle.remove();
          }, 500); // Match the duration of the animation (600ms)
        };
    
        // Attach the mousemove event listener
        document.addEventListener("mousemove", handleMouseMove);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
      return <div className="trail"></div>;
    };

export default ArrowTracker;
