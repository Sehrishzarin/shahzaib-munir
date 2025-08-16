import React from 'react';
import Sidebar from './components/Sidebar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Sidebar />
      <div className="main-content">
        <Home id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;