import React, { useState } from 'react';
import Animation from "../animation/Animation.js"
const BudgetTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: transactions.length + 1,
      description,
      amount: parseFloat(amount),
    };
    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount(0);
  };

  const handleRemoveTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const handleChange = (e) => {
    e.target.name === 'description'
      ? setDescription(e.target.value)
      : setAmount(e.target.value);
  };

  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className='h-screen my-10'>
      <div className='grid lg:grid-cols-2'>
        <div className='my-4'>
      <h1 className='text-6xl text-center '><Animation text="Budget Tracker"/></h1>
      <div className='text-center'>
      <form onSubmit={handleAddTransaction} className='my-9'>
        <input
          type="text"
          placeholder="Description"
          name="description"
          className='bg-slate-300 text-xl  my-3 p-1 rounded-md mx-5'
          value={description}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Amount"
          className='bg-slate-300 p-1 my-3 text-xl rounded-md mx-5'
          name="amount"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit" className='bg-red-400 my-3 rounded-md text-xl p-1'>Add transaction</button>
      </form>
      </div>
      
<div className=' grid grid-col-2'>
      {/* <h2 className='text-2xl text-center'>Transactions</h2> */}
      <table>
        <thead>
          <tr>
            <th className='text-2xl'>Description</th>
            <th className='text-2xl'>Amount</th>
            <th className='text-2xl'>Actions</th>
          </tr>
        </thead>
        <br/>
        <tbody >
          {transactions.map((transaction) => (
            <tr key={transaction.id} className='my-4'>
              <th>{transaction.description}</th>
              <th>{transaction.amount}</th>
              <th>
                <button onClick={() => handleRemoveTransaction(transaction.id)} className='bg-red-300 rounded-md p-1'>
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      <div className='text-center'>
      <h2 className=' my-7 text-5xl'>Summary</h2>
      <p className='text-2xl inline text-center'>Income: {totalIncome}</p>
      <p className='text-2xl inline mx-16 text-center'>Expense: {totalExpense}</p>
      <p className='text-2xl inline mx-3 text-center'>Balance: {totalIncome + totalExpense}</p>
      </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
