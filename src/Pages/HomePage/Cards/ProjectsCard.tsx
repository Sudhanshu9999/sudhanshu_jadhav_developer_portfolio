import React from "react";

const ProjectsCard: React.FC = () => {
return(
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
)
}
export default ProjectsCard;