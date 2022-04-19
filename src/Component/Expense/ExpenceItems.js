// import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenceItems.css';
import Card from '../UI/Card';

const ExpenceItems = (props) =>{
       return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenceItems;