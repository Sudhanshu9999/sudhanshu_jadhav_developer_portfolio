import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
  color: #333;
`;

const AboutPage: React.FC = () => {
  return (
    <HomeContainer>
      <h1>About Me</h1>
      <p>Discover my projects and skills.</p>
    </HomeContainer>
  );
};

export default AboutPage;
