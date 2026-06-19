import React from 'react';
import './App.css';

const categories = [
  {
    id: 'crypt',
    title: 'Crypt',
    description: 'Deciphering hidden messages, cracking ciphers, and breaking encryption. The codes of the underworld.',
    icon: '🗝️',
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Analyzing pcap files, investigating network traffic, and uncovering hidden communications on the wire.',
    icon: '📻',
  },
  {
    id: 'osint',
    title: 'Osint',
    description: 'Gathering intel from public sources, tracking down suspects. Everyone leaves a trail.',
    icon: '📰',
  },
  {
    id: 're',
    title: 'RE',
    description: 'Disassembling malware, analyzing binaries, and understanding malicious code. Take the gun apart.',
    icon: '⚙️',
  },
  {
    id: 'stegno',
    title: 'Stegno',
    description: 'Finding hidden data within images, audio, or other files. Secrets hidden in plain sight.',
    icon: '👁️',
  },
  {
    id: 'web',
    title: 'Web',
    description: 'Uncovering vulnerabilities in suspect web applications and exploiting them. Picking the lock.',
    icon: '🕸️',
  }
];

function App() {
  const githubRepoBase = "https://github.com/febin-ani/Spider-Noir-CTF/tree/main/Challenges";

  const handleCategoryClick = (categoryId) => {
    window.open(`${githubRepoBase}/${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`, '_blank');
  };

  return (
    <>
      <div className="rain-overlay"></div>
      <div className="scanlines"></div>
      
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-title flicker-text" data-text="SPIDER NOIR">SPIDER NOIR</div>
          <div className="nav-links">
            <a href="#">The Informant Network</a>
            <a href="#">My Case Files</a>
          </div>
        </nav>

        <main className="main-content">
          <div className="header-section">
            <h1 className="header-title">THE DETECTIVE'S DESK</h1>
            <p className="header-subtitle">
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
        </main>
      </div>
    </>
  );
}

export default App;
