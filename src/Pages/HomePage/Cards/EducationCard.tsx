import React from "react";

const EducationCard: React.FC = () => {

    return(
        <div className="card">
        <h2>Education</h2>
        <div className="education-section">
          <img src="/src/Images/UTA_campus.jpeg" alt="UTA Campus" />
          <p>Master of Science in Information Systems, University of Texas at Arlington, USA (2023 - Present, CGPA: 3.8)</p>
        </div>
        <hr />
        <div className="education-section">
          <img src="/path/to/your-education-image2.jpg" alt="Graduation" />
          <p>Bachelor of Engineering in Electronics, University of Mumbai, India (2015 - 2019, Distinction)</p>
        </div>
      </div>
    )

}

export default EducationCard;