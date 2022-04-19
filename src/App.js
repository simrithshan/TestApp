// import logo from './logo.svg';
// import './App.css';
import React, {useState} from "react";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";
const dummyData=[
  {
    id: 'e1',
    title:'Fridge',
    amount:45000,
    date: new Date(2022, 1, 5)
  },
  {
    id: 'e2',
    title:'Computer',
    amount:65000,
    date: new Date(2022, 1, 25)
  },
  {
    id: 'e3',
    title:'Vegetables',
    amount:1000,
    date: new Date(2022, 2, 14)
  },
  {
    id: 'e4',
    title:'Dress',
    amount:5000,
    date: new Date(2022, 3, 5)
  }];
const App=() => {
  const [expenses, setExpenses] = useState(dummyData);
                              // a parameter passed in the arrow function
    const addExpenseHandler = (expense)=>{
       setExpenses((prevExpenses) => {
        return[expense, ...prevExpenses];
       });
    };
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
