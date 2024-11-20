import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkillsetCard from './Cards/SkillsetCard/SkillsetCard';
import EducationCard from './Cards/EducationCard/EducationCard';
import ExperienceCard from './Cards/ExperienceCard/ExperienceCard';
import './HomePage.css';

const HomePage: React.FC = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const skillCloud = document.querySelector('.skill-cloud');
    const educationSection = document.querySelector('.educationSection');
    const experienceSection = document.querySelector('.experienceSection');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25 // Trigger when 25% of the element is in the viewport
    });


    cards.forEach(card => {
      observer.observe(card);
    });


    if (skillCloud) {
      observer.observe(skillCloud);
    }

    if (educationSection) {
      observer.observe(educationSection);
    }

    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => {
      cards.forEach(card => observer.unobserve(card));
      if (skillCloud) {
        observer.unobserve(skillCloud);
      }
      if (educationSection) {
        observer.unobserve(educationSection);
      }
      if (experienceSection) {
        observer.unobserve(experienceSection);
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
        <Link to="/projects" className="button">View My Work</Link>
      </div>

      <SkillsetCard />
      <EducationCard />
      <ExperienceCard />
      {/* <ProjectsCard /> */}
      
    </div>
  );
};

export default HomePage;
