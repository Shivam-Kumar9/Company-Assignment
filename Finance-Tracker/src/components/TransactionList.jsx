import React from "react";

function TransactionList({ transactions }) {
  return (
    <div className="card">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            ₹ {t.amount} - {t.category} - {t.description || "No Description"} - {t.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
