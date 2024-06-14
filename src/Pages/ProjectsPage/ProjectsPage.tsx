import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
  color: #333;
`;

const ProjectsPage: React.FC = () => {
  return (
    <HomeContainer>
      <h1>My Projects</h1>
      <p>Discover my projects and skills.</p>
    </HomeContainer>
  );
};

export default ProjectsPage;
