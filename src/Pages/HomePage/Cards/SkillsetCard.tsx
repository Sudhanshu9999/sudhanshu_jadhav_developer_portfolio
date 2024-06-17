import React from "react";

const SkillsetCard: React.FC = () => {

    const skills = [
        { name: 'JavaScript', weight: 'large' },
        { name: 'Python', weight: 'large' },
        { name: 'React', weight: 'large' },
        { name: 'Node.js', weight: 'medium' },
        { name: 'TypeScript', weight: 'medium' },
        { name: 'HTML5', weight: 'large' },
        { name: 'CSS3', weight: 'medium' },
        { name: 'Java', weight: 'medium' },
        { name: 'MySQL', weight: 'medium' },
        { name: 'C++', weight: 'small' },
        { name: 'MATLAB', weight: 'small' },
        { name: 'Scilab', weight: 'small' },
        { name: 'Docker', weight: 'small' },
        { name: 'Git', weight: 'medium' },
        { name: 'Webpack', weight: 'small' },
        { name: 'React Native', weight: 'medium' },
        { name: 'Elastic Search', weight: 'small' },
        { name: 'API Design', weight: 'medium' },
        { name: 'Redux', weight: 'medium' },
        { name: 'Agile Methodologies', weight: 'small' },
        { name: 'Continuous Integration', weight: 'small' }
      ];

      return(
        <div className="skill-cloud">
        {skills.map(skill => (
          <span key={skill.name} className={`skill ${skill.weight}`}>{skill.name}</span>
        ))}
      </div>
      )
} 

export default SkillsetCard;