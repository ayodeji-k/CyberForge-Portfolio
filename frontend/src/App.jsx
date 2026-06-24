import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProjectWorkspace from './pages/ProjectWorkspace';
import ResumeBuilder from './pages/ResumeBuilder';
import Pricing from './pages/Pricing';
import PublishedPortfolio from './pages/PublishedPortfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<ProjectWorkspace />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<PublishedPortfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
