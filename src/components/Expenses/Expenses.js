import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'


const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const savePeekedYear = peekedYear => {
    setFilteredYear(peekedYear);
  }
  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onYearPeek={savePeekedYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
