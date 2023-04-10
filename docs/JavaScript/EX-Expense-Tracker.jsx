import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  * {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	}
`;

const ExpenseForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExpenseInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const ExpenseButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

const ExpenseListWrapper = styled.div`
  margin-top: 20px;
`;

const ExpenseList = styled.ul`
	border: 1px solid white;
`;

const ExpenseListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  border-bottom: 1px solid white;
`;

const ExpenseListName = styled.div`
  font-weight: bold;
`;

const ExpenseListAmount = styled.div`
  color: ${props => props.isExpense ? "red" : "green"};
`;

export default function ExpenseTracker() {
	const [expenses, setExpenses] = useState([
		{ name: "Expense 1", date: "2022-01-15", amount: 100 },
		{ name: "Expense 2", date: "2022-02-20", amount: -200 },
		{ name: "Expense 3", date: "2023-03-25", amount: 300 },
		{ name: "Expense 4", date: "2023-04-10", amount: -400 }
	]);
	const [filterMonth, setFilterMonth] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const name = event.target.name.value;
		const amount = parseFloat(event.target.amount.value);
		const date = event.target.date.value;
		const expense = {
			name,
			amount,
			date
		};
		setExpenses([...expenses, expense]);
		event.target.reset();
	}

	const filteredExpenses = filterMonth ? expenses.filter(expense => expense.date.startsWith(filterMonth)) : expenses;
	const total = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
	const totalIncome = filteredExpenses.filter(expense => expense.amount > 0).reduce((total, expense) => total + expense.amount, 0);
	const monthYears = [...new Set(expenses.map(e => moment(e.date).format("YYYY-MM")))];

	return (
		<Wrapper>
			<ExpenseForm onSubmit={handleSubmit}>
				<ExpenseInput name="name" placeholder="Name" required />
				<ExpenseInput type="number" name="amount" placeholder="Amount" step="0.01" required />
				<ExpenseInput type="date" name="date" placeholder="Date" required />
				<ExpenseButton type="submit">Add Expense</ExpenseButton>
			</ExpenseForm>

			<ExpenseListWrapper>
				<select value={filterMonth} onChange={e => setFilterMonth(e.target.value)}>
					<option value="">All Months</option>
					{monthYears.map(e =>
						<option value={e} key={e}>{e}</option>
					)}
				</select>

				<div>Total: {total.toFixed(2)}</div>
				<div>Total Income: {totalIncome.toFixed(2)}</div>
				<div>Total Number of Expenses: {filteredExpenses.length}</div>

				{filteredExpenses.length > 0 && <ExpenseList>
					{filteredExpenses.map((expense, index) => (
						<ExpenseListItem key={index}>
							<ExpenseListName>{expense.name}</ExpenseListName>
							<ExpenseListAmount isExpense={expense.amount < 0}>{expense.amount.toFixed(2)}</ExpenseListAmount>
						</ExpenseListItem>
					))}
				</ExpenseList>}
			</ExpenseListWrapper>
		</Wrapper>
	);
}
