import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
           ...enteredExpenseData,
           id: Math.random().toString()
        };
        props.onaddExpense(expenseData);
        // should be the same name as what is passed from app.js while calling this NewExpense.js 
    };

    return (
    <div className = 'new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        {/*                                     a pointer is passed */}
    </div>);
};

export default NewExpense;