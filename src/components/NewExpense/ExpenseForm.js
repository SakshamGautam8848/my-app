import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //const [userImpiut, setUserInput] = useState({
  //    enteredTitle:'',
  //    enteredAmount:'',
  //    enteredDate: ''
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setuserImput({
    //   ...userInput,
    //    enteredTitle: event.target.value,
    //});
    //setUserInput((prevState) => {
    //    return { ...prevState, evteredTitle:event.target.value};
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setuserImput({
    //   ...userInput,
    //    enteredAmount: event.target.value,
    //});
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setuserImput({
    //   ...userInput,
    //    enteredDate: event.target.value,
    //});
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-12-01"
            max="2024-12-01"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
