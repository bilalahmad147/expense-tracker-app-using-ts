import React from 'react';
import '../App.css';

const Expense = () => {


    return (
        <div className="expense">
            <h2>ADD EXPENSE</h2>
            <form>
                <input className="inputExpense" placeholder="Enter Name" type="text" name="" id=""/><br /><br />
                <input className="inputExpense" placeholder="Enter Amount" type="number" name="" id=""/><br /><br />
                <button className="addExpense" type="submit">ADD EXPENSE</button>
            </form>
        </div>
    )
}

export default Expense;