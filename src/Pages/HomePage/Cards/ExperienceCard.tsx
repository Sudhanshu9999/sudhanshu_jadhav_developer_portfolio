import React from "react";
import Retailimg from '../../../Images/RelianceRetail .jpeg';
import JioImg from '../../../Images/Reliance-Jio-.jpg';

const ExperienceCard: React.FC = () => {
return(
    <div className="card">
          <h2>Professional Experience</h2>
          <div className="experience-section">
            <img src={JioImg} alt="Teaching" />
            <p>Graduate Teaching Assistant, University of Texas at Arlington, USA (2024 - Present)</p>
          </div>
          <hr />
          <div className="experience-section">
            <img src={Retailimg} alt="Development Team" />
            <p>Senior Software Developer, Reliance Jio Platforms Ltd, India (2019 - 2023)</p>
          </div>
        </div>

)
}
export default ExperienceCard;