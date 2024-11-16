import React from "react";

const SkillsetCard: React.FC = () => {

    const skills = [
        { name: 'JavaScript', weight: 'large' },
        { name: 'React.js', weight: 'large' },
        { name: 'TypeScript', weight: 'large' },
        { name: 'Node.js', weight: 'medium' },
        { name: 'Redux', weight: 'medium' },
        { name: 'HTML5', weight: 'large' },
        { name: 'CSS3', weight: 'medium' },
        { name: 'Context API', weight: 'small' },
        { name: 'MySQL', weight: 'medium' },
        { name: 'MongoDB', weight: 'medium' },
        { name: 'Web APIs', weight: 'small' },
        { name: 'Material UI', weight: 'small' },
        { name: 'Docker', weight: 'small' },
        { name: 'Git', weight: 'medium' },
        { name: 'Webpack', weight: 'small' },
        { name: 'React Native', weight: 'large' },
        { name: 'Elastic Search', weight: 'small' },
        { name: 'API Design', weight: 'medium' },
        { name: 'Redux', weight: 'large' },
        { name: 'Agile Methodologies', weight: 'small' },
        { name: 'Responsive Design', weight: 'large' },
        { name: 'AJAX', weight: 'medium' },
        { name: 'Sass', weight: 'small' },
        { name: 'Jest', weight: 'medium' },
        { name: 'Python', weight: 'small' },
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