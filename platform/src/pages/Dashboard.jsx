import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/challenges';

function Dashboard() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <>
      <div className="header-section">
        <img 
          src="https://raw.githubusercontent.com/febin-ani/Spider-Noir-CTF/main/Challenges/Osint/l%20Love%20Comics/spider_noir_case.jpg" 
          alt="Spider Noir Aesthetic" 
          className="header-image"
        />
        <div className="comic-panel-title">
          <h1 className="header-title">THE DETECTIVE'S DESK</h1>
        </div>
        <p className="header-subtitle typewriter">
          Welcome to the underbelly of the web. Step into the shadows, select your case, and crack the mysteries. The city is counting on you.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="category-card"
            onClick={() => handleCategoryClick(cat.id)}
          >
            <div className="category-icon">{cat.icon}</div>
            <h2 className="category-title">{cat.title}</h2>
            <p className="category-desc">{cat.description}</p>
            <div className="category-action">
              Investigate Case <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
