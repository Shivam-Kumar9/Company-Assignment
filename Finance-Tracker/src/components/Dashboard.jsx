import React from "react";

function Dashboard({ totalSpending }) {
  return (
    <div className="card">
      <h2>Total Monthly Spending</h2>
      <h3>₹ {totalSpending}</h3>
    </div>
  );
}

export default Dashboard;
