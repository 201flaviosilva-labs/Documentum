import CodeOutput from "@site/src/components/CodeOutput";
import React, { useState } from "react";

export function TodoListIndex() {
	const [todos, setTodos] = useState([
		"Learn React",
		"Beep",
		"Walk the dog",
		"Work smart not hard",
		"Boop",
	]);

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<CodeOutput
			title="Todo List using index as key"
			bodyBackground="none"
			bodyPadding={2}>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}
						<button onClick={() => removeTodo(index)}>Delete</button>
					</li>
				))}
			</ul>
		</CodeOutput>
	);
}

export function TodoListID() {
	const [todos, setTodos] = useState([
		{ id: 1, text: "Finish homework" },
		{ id: 2, text: "Walk the dog" },
		{ id: 3, text: "Do laundry" },
	]);

	const removeTodo = (id) => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};

	return (
		<CodeOutput
			title="Todo List with ID as a Key"
			bodyBackground="none"
			bodyPadding={2}>
			<ul>
				{todos.map(todo => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => removeTodo(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</CodeOutput>
	);
}
