import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'; // Importing icons for skills
// import '../Pages.css'; // Import the shared Pages.css for dark mode styling
import './AboutPage.css';
const AboutPage: React.FC = () => {
  const fadeInRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add visible class to trigger fade-in animation
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    const currentRef = fadeInRef.current;

    currentRef.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRef.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-text">
          <h1>About Me</h1>
          <p>I am a passionate software developer specializing in front-end technologies like React and TypeScript. I love building user-friendly applications with modern tools and techniques.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fadeIn" ref={(el) => (fadeInRef.current[0] = el as HTMLDivElement)}>
        <h2>Who Am I?</h2>
        <p>
          With a solid background in software engineering and a deep understanding of web development, I have built scalable and optimized web applications, collaborating with cross-functional teams and working on various projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section fadeIn" ref={(el) => (fadeInRef.current[1] = el as HTMLDivElement)}>
        <h2>Top Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <FaReact />
            <h3>React</h3>
            <p>Building dynamic user interfaces with React and Redux.</p>
          </div>
          <div className="skill-card">
            <FaNodeJs />
            <h3>Node.js</h3>
            <p>Backend development with Node.js, Express, and MongoDB.</p>
          </div>
          <div className="skill-card">
            <FaHtml5 />
            <h3>HTML5</h3>
            <p>Writing semantic, accessible HTML5 for rich user experiences.</p>
          </div>
          <div className="skill-card">
            <FaCss3 />
            <h3>CSS3</h3>
            <p>Styling websites using CSS, CSS Grid, Flexbox, and preprocessors like SASS.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section fadeIn" ref={(el) => (fadeInRef.current[2] = el as HTMLDivElement)}>
        <h2>Achievements</h2>
        <ul>
          <li>Built a POS system that handles 100,000+ transactions/month</li>
          <li>Improved inventory management systems handling 50,000+ items daily</li>
          <li>Led the development of a self-checkout system for gas stations at 50+ locations</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
