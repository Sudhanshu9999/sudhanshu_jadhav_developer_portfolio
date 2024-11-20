import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import Me from '../../Images/Me.png';
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
        <div className="about-hero-photo">
          <img src={Me} alt="Sudhanshu" />
        </div>
        <div className="about-hero-text">
          <h1>Hey There !!</h1>
          <p>I am a passionate software developer specializing in front-end technologies like React and TypeScript. I love building user-friendly applications with modern tools and techniques.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fadeIn" ref={(el) => (fadeInRef.current[0] = el as HTMLDivElement)}>
        <h2>Who Am I?</h2>
        <p>
          With a solid background in software engineering and a professional experience in developing scalable, secure, and user-friendly applications, I specialize in technologies like React.js, React Native, and Node.js. From designing intuitive POS systems to automating fueling solutions, I thrive on delivering innovative solutions that drive efficiency and impact. Constantly learning and collaborating, I bring a unique blend of technical expertise and problem-solving skills to every project I undertake.
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
          <li>
            <h3>Innovative Software Solutions:</h3>
            Designed and deployed scalable applications, enhancing efficiency and reducing operational complexities across various industries.
          </li>
          <li>
            <h3>Impactful System Optimizations:</h3>
            Improved performance and user experiences through cutting-edge technologies like React.js, Node.js, and ElasticSearch, achieving significant reductions in processing times and operational costs.
          </li>
          <li>
            <h3>Leadership in Development:</h3>
            Led the design and implementation of solutions impacting thousands of users, driving improvements in engagement, security, and productivity.
          </li>
          <li>
            <h3>Academic Excellence:</h3>
            Maintained a strong academic record with a 3.8 GPA during a Master’s program and an 8.16/10 CGPA in undergraduate studies, showcasing dedication to learning and mastery of technical skills.
          </li>
          <li>
            <h3>Collaborative Success:</h3>
            Delivered results through teamwork and mentorship, streamlining processes and contributing to the growth and success of projects and teams.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
