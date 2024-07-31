import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [outcomeTotal, setOutcomeTotal] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addExpense = (title, amount) => {
    if (title && !isNaN(amount)) {
      setBalance(prev => prev - amount);
      setOutcomeTotal(prev => prev + amount);
    }
  };

  const addIncome = (title, amount) => {
    if (title && !isNaN(amount)) {
      setBalance(prev => prev + amount);
      setIncomeTotal(prev => prev + amount);
    }
  };

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <Balance balance={balance} />
        <Account incomeTotal={incomeTotal} outcomeTotal={outcomeTotal} />
        <Dashboard addExpense={addExpense} addIncome={addIncome} />
      </main>
    </div>
  );
}

export default App;
