import '/.ExpensesList.css';
import ExpenceItems from './ExpenceItems';

const ExpensesList = () => {
    let expensesContent = <p>No Exxpenses Found.</p>; 
    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense)=> (
            <ExpenceItems
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))
    }
};

export default ExpensesList;