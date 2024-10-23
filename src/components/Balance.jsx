import React from 'react';

const Balance = ({ balance }) => (
  <div className="balance">
    <div className="balance-title">Available Balance</div>
    <div className="balance-value">${balance.toFixed(2)}</div>
  </div>
);

export default Balance;
