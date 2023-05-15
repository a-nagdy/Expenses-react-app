import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesComponent.css";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
const ExpensesComponent = (props) => {
  const [datePicked, setDatePicked] = useState("2022");

  const onDatePickedHandler = (yearSelected) => {
    setDatePicked(yearSelected);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === datePicked;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onDatePicked={onDatePickedHandler}
          selected={datePicked}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </li>
  );
};

export default ExpensesComponent;
