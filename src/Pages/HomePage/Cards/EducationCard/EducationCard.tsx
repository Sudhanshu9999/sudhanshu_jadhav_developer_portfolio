import React from "react";
import UTACampus from '../../../../Images/UTA_campus.jpeg';
import UMCampus from '../../../../Images/Um_campus.jpg';
import GradCap from '../../../../Images/GradCap.png';
import './EducationCard.css';

const EducationCard: React.FC = () => {

  return (
    <div className="card-container">
      <div className='card'>
        <img className='card-img' src={GradCap} alt='GradCap' />
      </div>
      <div className="card">
        <h2>Education</h2>
        <div className="education-section">
          <div>
            <img src={UTACampus} alt="UTA Campus" />
          </div>
          <div>
            <p>Master of Science in Information Systems</p>
            <p>University of Texas at Arlington, USA</p>
            <p>June 2023 - December 2024</p>
            <p>GPA - 3.8</p>
          </div>
        </div>
        <hr />
        <div className="education-section">
          <div>
            <img src={UMCampus} alt="Graduation" />
          </div>
          <div>
            <p>Bachelor of Engineering in Electronics</p>
            <p>University of Mumbai, India</p>
            <p>June 2015 - May 2019</p>
            <p>CGPA - 8.16/10</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EducationCard;