import React from "react";
import Retailimg from '../../../Images/RelianceRetail .jpeg';
import JioImg from '../../../Images/Reliance-Jio-.jpg';
import Dev1 from '../../../Images/Dev1.png';

const ExperienceCard: React.FC = () => {
  return (

    <div className="card-container">
      <div className="card">
        <h2>Professional Experience</h2>
        <div className="experience-section">
          <div>
            <img src={JioImg} alt="Teaching" />
          </div>
          <div>
            <p>Senior Software Developer</p>
            <p>Reliance Jio Platforms Ltd</p>
            <p>January 2021 - May 2023</p>
          </div>
        </div>
        <hr />
        <div className="experience-section">
          <div>
            <img src={Retailimg} alt="Development Team" />
          </div>
          <div>
          <p>Software Developer</p>
            <p>Reliance Retail & Telecom Systems Ltd </p>
            <p>September 2019 - Dec 2020</p>
          </div>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src={Dev1} alt='Dev1' />
      </div>
    </div>

  )
}
export default ExperienceCard;