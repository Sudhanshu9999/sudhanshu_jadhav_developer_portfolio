import React, { useEffect } from 'react';
import SkillsetCard from './Cards/SkillsetCard';
import EducationCard from './Cards/EducationCard';
import ExperienceCard from './Cards/ExperienceCard';
import ProjectsCard from './Cards/ProjectsCard';
import './HomePage.css';

const HomePage: React.FC = () => {
  
  useEffect(() => {
    // Select all the cards and skill-cloud elements
    const cards = document.querySelectorAll('.card');
    const skillCloud = document.querySelector('.skill-cloud'); // Select the skill-cloud element

    // Create an Intersection Observer to detect when elements come into the viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view'); // Add the 'in-view' class when in view
          observer.unobserve(entry.target); // Stop observing the element after it's in view
        }
      });
    }, {
      threshold: 0.25 // Trigger when 25% of the element is in the viewport
    });

    // Observe each card
    cards.forEach(card => {
      observer.observe(card);
    });

    // Observe the skill-cloud for the scroll animation
    if (skillCloud) {
      observer.observe(skillCloud);
    }

    return () => {
      // Cleanup observer when the component unmounts
      cards.forEach(card => observer.unobserve(card));
      if (skillCloud) {
        observer.unobserve(skillCloud);
      }
    };
  }, []);


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
