import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => (
  <header>
    <div className="app-title">
      <h1>Budget<span>Buddy</span></h1>
    </div>
    <div className="mode-toggle" onClick={toggleTheme}>
      <span className="mode-icon sun" style={{ display: isDarkMode ? 'block' : 'none' }}>☀️</span>
      <span className="mode-icon moon" style={{ display: isDarkMode ? 'none' : 'block' }}>🌙</span>
    </div>
  </header>
);

export default Header;
