import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMenu } from '../ContextAPI/MenuContext';
import Navigation from './Navigation';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ProjectsPage from '../Pages/ProjectsPage/ProjectsPage';
import './Navigation.css';

const RoutePage: React.FC = () => {

  const { isMenuOpen } = useMenu();

  return (
    <Router>
      <Navigation />
      <div className='content-container'>
        <div className={`main-content ${isMenuOpen ? 'blur-background' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default RoutePage;
