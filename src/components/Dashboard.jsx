import React, { useState } from 'react';
import Tab from './Tab';
import Input from './Input';

const Dashboard = ({ addExpense, addIncome }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [incomeTitle, setIncomeTitle] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  return (
    <div className="dashboard">
      <div className="tabs">
        {['all', 'expense', 'income'].map(tab => (
          <Tab
            key={tab}
            tab={tab}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </div>
      {activeTab === 'expense' && (
        <div id="expense" className="tab-content active">
          <Input
            type="Expense"
            title={expenseTitle}
            amount={expenseAmount}
            onTitleChange={setExpenseTitle}
            onAmountChange={setExpenseAmount}
            onClick={() => {
              addExpense(expenseTitle, parseFloat(expenseAmount));
              setExpenseTitle('');
              setExpenseAmount('');
            }}
          />
        </div>
      )}
      {activeTab === 'income' && (
        <div id="income" className="tab-content active">
          <Input
            type="Income"
            title={incomeTitle}
            amount={incomeAmount}
            onTitleChange={setIncomeTitle}
            onAmountChange={setIncomeAmount}
            onClick={() => {
              addIncome(incomeTitle, parseFloat(incomeAmount));
              setIncomeTitle('');
              setIncomeAmount('');
            }}
          />
        </div>
      )}
      {/* Display all expenses and incomes */}
      <div id="all" className={`tab-content ${activeTab === 'all' ? 'active' : ''}`}>
        <ul className="list"></ul>
      </div>
    </div>
  );
};

export default Dashboard;
