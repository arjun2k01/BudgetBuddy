import React from 'react';

const Tab = ({ tab, activeTab, onClick }) => (
  <button
    className={`tab ${activeTab === tab ? 'active' : ''}`}
    onClick={() => onClick(tab)}
  >
    {tab.toUpperCase()}
  </button>
);

export default Tab;
