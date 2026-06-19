import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories, challengesData, githubBaseUrl } from '../data/challenges';

function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find((cat) => cat.id === categoryId);
  const challenges = challengesData[categoryId] || [];

  if (!category) {
    return (
      <div className="header-section">
        <h1 className="header-title">CASE NOT FOUND</h1>
        <button className="back-btn" onClick={() => navigate('/')}>&larr; Back to Desk</button>
      </div>
    );
  }

  const handleDownload = (fileName) => {
    // Navigate to the raw github content
    window.open(`${githubBaseUrl}/${category.folderName}/${fileName}`, '_blank');
  };

  const handleCopy = (endpoint) => {
    navigator.clipboard.writeText(endpoint);
    alert('Link Copied to Clipboard!');
  };

  return (
    <div className="category-page">
      <button className="back-btn" onClick={() => navigate('/')}>&larr; Back to Desk</button>
      
      <div className="category-header">
        <div className="category-icon-large">{category.icon}</div>
        <h1 className="header-title">{category.title} Files</h1>
      </div>
      
      <p className="header-subtitle typewriter" style={{marginBottom: '3rem'}}>
        {category.description} <br/><br/>
        Evidence collected for this case is listed below. Download and analyze carefully.
      </p>

      <div className="challenges-list">
        {challenges.length === 0 ? (
          <p className="header-subtitle" style={{textAlign: 'center'}}>No evidence currently filed for this case.</p>
        ) : (
          challenges.map((challenge, index) => (
            <div key={index} className="challenge-item category-card">
              <h3 className="challenge-name">{challenge.name}</h3>
              {challenge.isWeb ? (
                <>
                  <p className="challenge-file-name">{challenge.description}</p>
                  <button 
                    className="download-action"
                    onClick={() => handleCopy(challenge.endpoint)}
                  >
                    Copy Link <span>&#128203;</span>
                  </button>
                </>
              ) : (
                <>
                  <p className="challenge-file-name">{challenge.file.split('/').pop()}</p>
                  <button 
                    className="download-action"
                    onClick={() => handleDownload(challenge.file)}
                  >
                    Download Evidence <span>&darr;</span>
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
