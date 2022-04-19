import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenceItems from "./ExpenceItems";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };
                                        // a default method which filteres array and it returns a new array and do not modifies the original aaray
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
            // a function, getfullYear ia an object -> to a string = true or false
    });

    

    return(
    <div>
        <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onFilterChange={filterChangeHandler}/>
                                   {/* the '&&' operator return the content afetr the '&&' if it is true   */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        -------inside of the JSX we cant use the 'if' so this is the alternative method -> conditional statement
        {filteredExpenses.length === 0 && filteredExpenses.map((expense)=> (
            <ExpenceItems
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        )) } */}
        {expensesContent}
        
        {/* old one  */}
            {/* <ExpenceItems
            name={props.items[0].title}
            cost={props.items[0].amount}
            day={props.items[0].date}
        // /> */}
        </Card>
    </div>
    );
};
export default Expenses;