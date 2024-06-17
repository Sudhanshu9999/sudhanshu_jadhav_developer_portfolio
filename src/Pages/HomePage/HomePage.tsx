import React from 'react';
import SkillsetCard from './Cards/SkillsetCard';
import EducationCard from './Cards/EducationCard';
import ExperienceCard from './Cards/ExperienceCard';
import ProjectsCard from './Cards/ProjectsCard';
import './HomePage.css';

const HomePage: React.FC = () => {

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="heading">Welcome to My Portfolio</h1>
        <h2 className="sub-heading">Discover my projects, skills, and experiences.</h2>
      </div>
      <div className="intro-section">
        <p>Hello, I'm Sudhanshu! I'm a software developer specializing in front-end technologies like React and TypeScript. Here, you'll find a selection of the projects that I've worked on and more about my journey in tech.</p>
        <a href="/projects" className="button">View My Work</a>
      </div>


      <div className="card-container">

        <SkillsetCard />
        <EducationCard />
        <ExperienceCard />
        <ProjectsCard />

      </div>
    </div>
  );
};

export default HomePage;
