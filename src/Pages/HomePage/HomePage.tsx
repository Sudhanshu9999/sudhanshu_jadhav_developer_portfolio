import React from 'react';
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

      <div className="home-container">
        <div className="card">
          <h2>Education</h2>
          <div className="education-section">
            <img src="/path/to/your-education-image1.jpg" alt="UTA Campus" />
            <p>Master of Science in Information Systems, University of Texas at Arlington, USA (2023 - Present, CGPA: 3.8)</p>
          </div>
          <hr />
          <div className="education-section">
            <img src="/path/to/your-education-image2.jpg" alt="Graduation" />
            <p>Bachelor of Engineering in Electronics, University of Mumbai, India (2015 - 2019, Distinction)</p>
          </div>
        </div>

        <div className="card">
          <h2>Professional Experience</h2>
          <div className="experience-section">
            <img src="/path/to/your-experience-image1.jpg" alt="Teaching" />
            <p>Graduate Teaching Assistant, University of Texas at Arlington, USA (2024 - Present)</p>
          </div>
          <hr />
          <div className="experience-section">
            <img src="/path/to/your-experience-image2.jpg" alt="Development Team" />
            <p>Senior Software Developer, Reliance Jio Platforms Ltd, India (2019 - 2023)</p>
          </div>
        </div>

        <div className="card">
          <h2>Projects</h2>
          <div className="project-section">
            <img src="/path/to/your-project-image1.jpg" alt="Store-X Interface" />
            <p>Store-X: Led the development of Store-X's front-end and UI using React JS, impacting 15000+ stores nationwide.</p>
          </div>
          <hr />
          <div className="project-section">
            <img src="/path/to/your-project-image2.jpg" alt="SafeEats App" />
            <p>SafeEats: Developed an allergen detection app, integrating AI-based scanning with a React frontend.</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default HomePage;
