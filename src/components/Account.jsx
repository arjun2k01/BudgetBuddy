import React from 'react';

const Account = ({ incomeTotal, outcomeTotal }) => (
  <div className="account">
    <div className="income">
      <div className="account-title">Income</div>
      <div className="account-value">${incomeTotal.toFixed(2)}</div>
    </div>
    <div className="outcome">
      <div className="account-title">Outcome</div>
      <div className="account-value">${outcomeTotal.toFixed(2)}</div>
    </div>
  </div>
);

export default Account;
