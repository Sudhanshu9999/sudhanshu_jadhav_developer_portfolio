import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3 } from "react-icons/fa";
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    // Copy the ref to a local variable to prevent changes during cleanup
    const currentCardsRef = cardsRef.current;

    // Observe each project card
    currentCardsRef.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      // Cleanup observer using the local variable
      currentCardsRef.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []); 

  return (
    <div className="page-container">
      {/* Page Title and Description */}
      <section className="projectsSection">
        <h2 className="pageTitle">My Projects</h2>
        <p className="pageDescription">
          Here is a showcase of some of the most impactful projects I’ve worked on, demonstrating my skills in full-stack development, UI design, and problem-solving.
        </p>

        {/* Projects Container */}
        <div className="projectsContainer">
          {/* Project 1 */}
          <div
            className="projectCard fadeIn"
            ref={(el) => (cardsRef.current[0] = el!)}
          >
            <h3>POS UI and Kitchen Software</h3>
            <p className="techStack">Technologies: React Native, MongoDB, Material UI</p>
            <p>Developed a POS user interface for Android-based POS systems handling 100,000+ transactions per month and implemented offline functionality.</p>
            <ul>
              <li>Reduced recipe management time by 40%</li>
              <li>Enabled offline functionality with React Native Background Fetch</li>
            </ul>
            <div className="techIcons">
              <FaReact className="icon" />
              <FaDatabase className="icon" />
              <FaCss3 className="icon" />
            </div>
            <button className="readMore">Read More</button>
          </div>

          {/* Project 2 */}
          <div
            className="projectCard fadeIn"
            ref={(el) => (cardsRef.current[1] = el!)}
          >
            <h3>Jio Mart Inventory Management</h3>
            <p className="techStack">Technologies: Node.js, ElasticSearch</p>
            <p>Engineered an inventory management system that handled 50,000+ item searches and 10,000+ transactions daily.</p>
            <ul>
              <li>Improved search response time by 50%</li>
              <li>Implemented double encryption for enhanced security</li>
            </ul>
            <div className="techIcons">
              <FaNodeJs className="icon" />
              <FaDatabase className="icon" />
            </div>
            <button className="readMore">Read More</button>
          </div>

          {/* Project 3 */}
          <div
            className="projectCard fadeIn"
            ref={(el) => (cardsRef.current[2] = el!)}
          >
            <h3>Reliance Fuel - Automated Self-Checkout</h3>
            <p className="techStack">Technologies: React.js</p>
            <p>Developed an automated fueling and self-checkout system for touchscreen systems at gas stations.</p>
            <ul>
              <li>Improved operational efficiency by 25% at 50+ locations</li>
              <li>Implemented integrations with 12+ MOP partners</li>
            </ul>
            <div className="techIcons">
              <FaReact className="icon" />
            </div>
            <button className="readMore">Read More</button>
          </div>

          {/* Project 4 */}
          <div
            className="projectCard fadeIn"
            ref={(el) => (cardsRef.current[3] = el!)}
          >
            <h3>Store-X UI Development</h3>
            <p className="techStack">Technologies: React.js, CSS Grid</p>
            <p>Led the front-end development for Store-X's UI, impacting 15,000+ Reliance stores nationwide.</p>
            <ul>
              <li>Achieved 30% increase in store management efficiency</li>
              <li>Optimized for different screen sizes using CSS Grid and Flexbox</li>
            </ul>
            <div className="techIcons">
              <FaReact className="icon" />
              <FaCss3 className="icon" />
            </div>
            <button className="readMore">Read More</button>
          </div>

          {/* Project 5 */}
          <div
            className="projectCard fadeIn"
            ref={(el) => (cardsRef.current[4] = el!)}
          >
            <h3>Merchant Onboarding for Jio Mart</h3>
            <p className="techStack">Technologies: React.js, Node.js</p>
            <p>Developed an automated onboarding platform for new merchants joining the Jio Mart platform.</p>
            <ul>
              <li>Improved the merchant onboarding process by 30%</li>
              <li>Automated various KYC processes and document verification</li>
            </ul>
            <div className="techIcons">
              <FaReact className="icon" />
              <FaNodeJs className="icon" />
            </div>
            <button className="readMore">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
