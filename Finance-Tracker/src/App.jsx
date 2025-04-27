import React from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import useTransactions from "./hooks/useTransactions";
import "./App.css";

function App() {
  const {
    transactions,
    addTransaction,
    totalSpending,
    categoryData,
    monthlyData,
  } = useTransactions();

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>

      <TransactionForm addTransaction={addTransaction} />

      <Dashboard totalSpending={totalSpending} />

      <Charts categoryData={categoryData} monthlyData={monthlyData} />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
