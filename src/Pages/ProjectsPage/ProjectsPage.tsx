import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCss3 } from "react-icons/fa";
import './ProjectsPage.css';
import Popup from './Popup'; // Import the Popup component

interface ProjectContent {
  title: string;
  description: string;
  techIcons: JSX.Element[];
  detailedDescription: string;
  keyOutcomes: string[];
}

const ProjectsPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<ProjectContent | null>(null);  // Updated type for popupContent

  // Project details with more in-depth content
  const projectDetails = {
    project1: {
      title: "POS UI and Kitchen Software",
      description: "Developed a POS user interface for Android-based POS systems handling 100,000+ transactions per month and implemented offline functionality using React Native and MongoDB.",
      techIcons: [<FaReact className="icon" />, <FaDatabase className="icon" />, <FaCss3 className="icon" />],
      detailedDescription: "The POS UI was built to provide a seamless experience for restaurant staff, optimizing the flow of orders and reducing wait times. I implemented offline capabilities to ensure that the system could still function even when there was no internet connection, enabling the restaurant to continue operations without interruption. The system supports a high volume of transactions daily, ensuring that restaurants can scale easily with their growing customer base.",
      keyOutcomes: [
        "Reduced recipe management time by 40%",
        "Enabled offline functionality with React Native Background Fetch",
        "Improved order processing speed by 30%",
        "Achieved 99.9% system uptime across all locations"
      ]
    },
    project2: {
      title: "Jio Mart Inventory Management",
      description: "Engineered an inventory management system that handled 50,000+ item searches and 10,000+ transactions daily using Node.js and ElasticSearch.",
      techIcons: [<FaNodeJs className="icon" />, <FaDatabase className="icon" />],
      detailedDescription: "I created an inventory management system that allows users to search for products efficiently even with a large product database. The system also integrates with various third-party APIs to ensure real-time stock updates and automatic reordering. ElasticSearch was used to index and query the data quickly, reducing search times drastically. The system has helped Jio Mart scale their inventory operations and streamline their logistics.",
      keyOutcomes: [
        "Improved search response time by 50%",
        "Reduced data redundancy and storage costs by 25%",
        "Implemented double encryption for enhanced security",
        "Increased transaction speed by 40% during peak hours"
      ]
    },
    project3: {
      title: "Reliance Fuel - Automated Self-Checkout",
      description: "Developed an automated fueling and self-checkout system for touchscreen systems at gas stations, improving operational efficiency by 25% at over 50 locations.",
      techIcons: [<FaReact className="icon" />],
      detailedDescription: "This project involved building a self-checkout kiosk for fuel stations, which allowed customers to fuel their vehicles and pay without needing to interact with an attendant. The system integrates with the fuel pumps and payment systems, allowing for a seamless transaction process. The self-checkout system also includes a loyalty program, enabling customers to earn rewards points with every purchase.",
      keyOutcomes: [
        "Improved operational efficiency by 25% at 50+ locations",
        "Reduced fuel theft by 15% through automated payment verification",
        "Increased customer satisfaction with faster checkout process",
        "Reduced staffing costs by 30% per location"
      ]
    },
    project4: {
      title: "Store-X UI Development",
      description: "Led the front-end development for Store-X's UI, impacting 15,000+ Reliance stores nationwide and improving store management efficiency by 30%.",
      techIcons: [<FaReact className="icon" />, <FaCss3 className="icon" />],
      detailedDescription: "For this project, I developed the user interface for Store-X, an application that helps manage retail stores efficiently. The UI was built with React.js, utilizing CSS Grid and Flexbox to ensure responsiveness across different screen sizes and devices. The application allows store managers to track inventory, manage staff schedules, and access real-time sales data.",
      keyOutcomes: [
        "Achieved a 30% increase in store management efficiency",
        "Optimized UI for various screen sizes with CSS Grid and Flexbox",
        "Improved user engagement by 25% with a more intuitive interface",
        "Reduced onboarding time for new store managers by 40%"
      ]
    },
    project5: {
      title: "Merchant Onboarding for Jio Mart",
      description: "Developed an automated onboarding platform for new merchants joining the Jio Mart platform, streamlining the registration and verification process.",
      techIcons: [<FaReact className="icon" />, <FaNodeJs className="icon" />],
      detailedDescription: "The merchant onboarding platform I developed automates various parts of the registration and verification process for Jio Mart. The system integrates with third-party KYC services and document verification tools, ensuring that new merchants can be onboarded quickly and efficiently. It also provides merchants with real-time updates on their application status and any required documentation.",
      keyOutcomes: [
        "Improved the merchant onboarding process by 30%",
        "Automated KYC processes and document verification",
        "Reduced manual intervention by 40%",
        "Increased merchant activation rate by 15%"
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentCardsRef = cardsRef.current;
    currentCardsRef.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCardsRef.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const openPopup = (project: ProjectContent) => {
    setPopupContent(project); // Now we pass the full project content object
    setIsPopupOpen(true); // Open the popup
  };

  

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className="page-container">
      <section className="projectsSection">
        <h2 className="pageTitle">My Projects</h2>
        <p className="pageDescription">
          Here is a showcase of some of the most impactful projects I’ve worked on, demonstrating my skills in full-stack development, UI design, and problem-solving.
        </p>

        <div className="projectsContainer">
          {Object.keys(projectDetails).map((key, index) => {
            const project = projectDetails[key as keyof typeof projectDetails];
            return (
              <div className="projectCard fadeIn" ref={(el) => (cardsRef.current[index] = el!)} key={index}>
                <h3>{project.title}</h3>
                {/* <p className="techStack">Technologies: {project.techIcons.map((icon, i) => <span key={i}>{icon}</span>)}</p> */}
                <p>{project.description}</p>
                <ul>
                  <li>{project.keyOutcomes[0]}</li>
                  <li>{project.keyOutcomes[1]}</li>
                </ul>
                <div className="techIcons">
                  {project.techIcons}
                </div>
                <button className="readMore" onClick={() => openPopup(project)}>Read More</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Show the Popup if it's open */}
      {isPopupOpen && popupContent && <Popup content={popupContent} closePopup={closePopup} />}
    </div>
  );
};

export default ProjectsPage;
