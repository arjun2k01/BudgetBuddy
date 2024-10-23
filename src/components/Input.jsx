import React from 'react';

const Input = ({ type, title, amount, onTitleChange, onAmountChange, onClick }) => (
  <div className="input">
    <input
      type="text"
      value={title}
      placeholder="Title"
      onChange={e => onTitleChange(e.target.value)}
    />
    <input
      type="number"
      value={amount}
      placeholder="Amount"
      onChange={e => onAmountChange(e.target.value)}
    />
    <button className="add-btn" onClick={onClick}>
      Add {type}
    </button>
  </div>
);

export default Input;
