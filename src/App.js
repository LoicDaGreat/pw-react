import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Index from './Pages/Index';
import ThemeDark from './Contexts/ThemeDark';

function App() {
  return (
    <ThemeDark>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </ThemeDark>
  );
}

export default App;
