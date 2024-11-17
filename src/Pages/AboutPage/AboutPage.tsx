import React, { useEffect } from "react";
import styles from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.fadeIn}`);
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add(styles.visible);
        } else {
          element.classList.remove(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to handle content already in view
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section with Split Layout */}
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.fadeIn}>About Me</h1>
          <p className={styles.fadeIn}>
            Passionate about building scalable, user-friendly applications
            that deliver seamless experiences.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.parallaxBg}></div>
          <div className={styles.heroImage}></div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.aboutSection} ${styles.fadeIn}`}>
        <h2>Who Am I?</h2>
        <p>
          I'm John Doe, a software developer based in San Francisco. I specialize in building scalable web applications using modern frameworks like React,
          TypeScript, and Node.js. I am passionate about clean code, user experience, and continuously learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className={`${styles.skillsSection} ${styles.fadeIn}`}>
        <h2>My Skills</h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCard}>
            <h3>Frontend Development</h3>
            <p>React.js, TypeScript, CSS3, HTML5</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB, PostgreSQL</p>
          </div>
          <div className={styles.skillCard}>
            <h3>Design & UX</h3>
            <p>Figma, Sketch, Adobe XD</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`${styles.achievementsSection} ${styles.fadeIn}`}>
        <h2>Achievements</h2>
        <ul>
          <li>Built a high-performance e-commerce platform</li>
          <li>Contributed to 50+ open-source projects</li>
          <li>Certified in React and Node.js</li>
          <li>Created an award-winning UX design for a mobile app</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
