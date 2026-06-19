import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CategoryPage from './pages/CategoryPage';
import './App.css';

function App() {
  return (
    <>
      <div className="rain-overlay"></div>
      <div className="scanlines"></div>
      <div className="halftone"></div>
      <div className="web-corner top-left"></div>
      <div className="web-corner top-right"></div>
      
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-title flicker-text" data-text="SPIDER NOIR">SPIDER NOIR</Link>
          <div className="nav-links">
            <a href="#">The Informant Network</a>
            <a href="#">My Case Files</a>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
