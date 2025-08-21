import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Index from './Pages/Index';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';
import ThemeDark from './Contexts/ThemeDark';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/ProjectDetails" element={<ProjectDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
