import {TodoListIndex,TodoListID} from "./Key-Prop";

# Key Prop


## The problem

<TodoListIndex />

```jsx title="App.js" showLineNumbers {3-7,11-12,19,21}
export default function TodoListIndex() {
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
		<ul>
			{todos.map((todo, index) => (
				<li key={index}>
					{todo}
					<button onClick={() => removeTodo(index)}>Delete</button>
				</li>
			))}
		</ul>
	);
}
```

The problem with this code is that we are using the index of each todo item as the component key when we render the list.

This means that if we delete the second item in the list (with index 1), the third item will become the new second item (with index 1). When we rerender the list, React will think that the second item was deleted and the third item was added, even though it's the same item with a new index. 

This can cause unexpected behavior in the UI, such as the **wrong item being deleted** or **unnecessary re-renders**.

:::note
In this case you can check some re-renders
:::

## The solution

<TodoListID />

```jsx title="App.js" showLineNumbers {3-5,9,16,18}
export default function TodoListID() {
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
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					{todo.text}
					<button onClick={() => removeTodo(todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
}
```

In this updated code, we use the `id` of each todo item as the component key, and we pass the `id` to the `removeTodo` function when the "Delete" button is clicked. This ensures that each item has a unique and stable key that won't change if the order of the items changes, and it avoids the problems with using the index as the key.

:::note
Normally, you will receive an `id` from the BE
:::
