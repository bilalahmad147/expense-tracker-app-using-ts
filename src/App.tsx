import React from 'react';
import './App.css';
import Header from './Components/Header';
import History from './Components/History';
import ExpenseDetail from './Components/ExpenseDetail';
import Expense from './Components/Expense';

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseDetail />
      <h2>History</h2>
      <History />
      <Expense />
    </div>
  );
}

export default App;
