import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert("Please fill in all required fields!");
      return;
    }

    addTransaction({
      amount: Number(amount),
      category,
      description,
      date,
    });

    // Clear the form
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        onClick={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
