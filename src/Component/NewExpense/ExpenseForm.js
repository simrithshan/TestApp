import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // alternative to multiple useState
        // const [userInput,setUserInput]=useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: '',
        // })

    const titleChangeHeader = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value};
        // })
    };
    const amountChangeHeader = (event) =>{
        setEnteredAmount(event.target.value);
        
    };
    const dateChangeHeader = (event) =>
    {
        setEnteredDate(event.target.value);
    };
        
    const submitHandler = (event) =>{
        // the preventDefault is a default function which stops the default sending of data when onsubmit is initiated and sending to the server instead we wants that to be saved somewhere
        event.preventDefault();
        //  to render all the values together combine them to a object and date to be in the default date object in JS
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return ( 
        // instead of on click event handler we are making the entire form to get submitted by using onSubmit
    <form onSubmit={submitHandler}> 
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' 
                value={enteredTitle} 
                onChange={titleChangeHeader} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' 
                min='0.01' 
                step='0.01' 
                value={enteredAmount}
                onChange={amountChangeHeader} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' 
                min='2019-01-01' 
                max='2022-12-31' 
                value={enteredDate}
                onChange={dateChangeHeader}/>
            </div>
        </div>
        {/* hai */}
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
    );
};
export default ExpenseForm ;