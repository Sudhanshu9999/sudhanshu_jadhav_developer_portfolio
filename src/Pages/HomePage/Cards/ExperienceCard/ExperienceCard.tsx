import React from "react";
import "./ExperienceCard.css";

// Import the company images
import Retailimg from "../../../../Images/RelianceRetail .jpeg";
import JioImg from "../../../../Images/Reliance-Jio-.jpg";

interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  duration: string;
  description: string;
  image: string; // To handle dynamic image per card
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  jobTitle,
  companyName,
  duration,
  description,
  image,
}) => {
  return (
    <div className="experienceCard">
      <div className="imageContainer">
        <img src={image} alt={`${companyName} logo`} className="companyImage" />
      </div>
      <div className="cardContent">
        <h3 className="jobTitle">{jobTitle}</h3>
        <p className="companyName">{companyName}</p>
        <p className="duration">{duration}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experienceData = [
    {
      jobTitle: "Senior Software Developer",
      companyName: "Jio Platforms Ltd",
      duration: "January 2021 - May 2023",
      description: "Managing daily retail operations and improving customer engagement.",
      image: JioImg, // Image for Reliance Retail
    },
    {
      jobTitle: "Software Developer",
      companyName: "Reliance Retail & Telecom Systems Ltd",
      duration: "September 2019 - Dec 2020",
      description: "Worked on network installations and troubleshooting for Jio's 4G services.",
      image: Retailimg, // Image for Reliance Jio
    },
  ];

  return (
    <section className="experienceSection">
      <h2 className="sectionTitle">Experience</h2>
      <div className="experienceList">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            jobTitle={exp.jobTitle}
            companyName={exp.companyName}
            duration={exp.duration}
            description={exp.description}
            image={exp.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;