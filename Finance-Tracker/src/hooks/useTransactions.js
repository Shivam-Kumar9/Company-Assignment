import { useState, useEffect } from "react";

function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const totalSpending = transactions.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  const categoryData = {};
  const monthlyData = {};

  transactions.forEach((t) => {
    categoryData[t.category] = (categoryData[t.category] || 0) + Number(t.amount);

    const month = t.date.slice(0, 7); // "YYYY-MM"
    monthlyData[month] = (monthlyData[month] || 0) + Number(t.amount);
  });

  return {
    transactions,
    addTransaction,
    totalSpending,
    categoryData,
    monthlyData,
  };
}

export default useTransactions;
