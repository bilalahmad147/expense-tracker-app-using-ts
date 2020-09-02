import React from 'react';
import './App.css';
import History from './Components/History';
import ExpenseDetail from './Components/ExpenseDetail';
import Expense from './Components/Expense';
import Balance from './Components/Balance';

function App() {
  return (
    <div className="App">
      <Balance />
      <ExpenseDetail />
      <h2>HISTORY</h2>
      <History />
      <Expense />
    </div>
  );
}

export default App;
