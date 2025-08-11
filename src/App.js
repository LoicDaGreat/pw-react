import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Index from './Pages/Index'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
