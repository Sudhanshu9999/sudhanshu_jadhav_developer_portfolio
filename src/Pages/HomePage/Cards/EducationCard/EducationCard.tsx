import React from "react";
import "./EducationCard.css";

// Import the university images
import UTACampus from "../../../../Images/UTA_campus.jpeg";
import UMCampus from "../../../../Images/Um_campus.jpg";

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
  image: string; // To handle dynamic image per card
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  year,
  description,
  image,
}) => {
  return (
    <div className="educationCard">
      <div className="imageContainer">
        <img src={image} alt={`${institution} campus`} className="universityImage" />
      </div>
      <div className="cardContent">
        <h3 className="degree">{degree}</h3>
        <p className="institution">{institution}</p>
        <p className="year">{year}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {

  const educationData = [
    {
      degree: "Master of Science in Information Systems",
      institution: "University of Texas at Arlington, USA",
      year: "June 2023 - December 2024",
      description: "Specializing in software development, algorithms, and data analytics.",
      image: UTACampus, // Image for University of Miami
    },
    {
      degree: "Bachelor of Engineering in Electronics",
      institution: "University of Mumbai, India",
      year: "June 2015 - May 2019",
      description: "Focused on computer networking,  object oriented programming and software development.",
      image: UMCampus, // Image for University of Texas Arlington
    },
  ];

  return (
    <section className="educationSection">
      <h2 className="sectionTitle">Education</h2>
      <div className="educationList">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            year={edu.year}
            description={edu.description}
            image={edu.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
