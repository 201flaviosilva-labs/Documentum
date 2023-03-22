import {Inline1, DynamicInline1, DynamicInline2,DynamicInline3} from "./Inline.jsx";

# Inline Style

## What the hell is Inline Style?

- Inline styles can be more dynamic;
- It's not the most efficient way to style a component;
- Normally it's used to basic components and prototypes;
- **This style it's not recommended;**

## Let's see the magic happening

Choose any element you want to use to apply the styles.

For example we can create a new element inside the `App.js` file.

The styles are applied by passing an object the `style` attribute.


```jsx title="App.js" showLineNumbers {4}
export function App() {
	return (
		<div className="App">
			<div style={{ backgroundColor: "blue", color: "white" }}>Inline Style</div>
		</div>
	);
}
```

<Inline1 />

:::note
In JSX, the syntax for inserting a JavaScript expression into an element is using braces `{}`.

The `style` attribute receives a javascript object, that's why we are opening some new brackets `{}`;

If that it's to weird to you, you can create a external object like this:

```jsx title="App.js" showLineNumbers {2-5,9}
export function App() {
	const myStyle = {
		backgroundColor: "blue", // NOTE: properties must be in camel case
		color: "white"
	};

	return (
		<div className="App">
			<div style={myStyle}>Inline Style</div>
		</div>
	);
}
```
:::

:::caution
This way you are changing the styles inline. So that means, if you try to apply any other style with external CSS, the style will not be applied.

You can inspect the DOM element to check the current applied style:

```html title="Inspector"
<div style="background-color: blue; color: white;">Inline Style</div>
```
:::


## What is the difference between React Inline Style and Vanilla Javascript?

### React

```jsx title="App.js" showLineNumbers
<div style={{ backgroundColor: "blue", color: "white" }}>Inline Style</div>
```

### Vanilla

```html title="index.html" showLineNumbers
<div id="my-div">Inline Style</div>
```

```js title="index.js" showLineNumbers
const myDiv = document.getElementById("my-div");
myDiv.style.backgroundColor = "blue";
myDiv.style.color = "white";
```

## Dynamic Style

### Basic Example

If we use a `useState` hook, react will be aware of the changes and will update the background color when the button is clicked and the state changes

```jsx title="App.js" showLineNumbers {4,7,9}
import { useState } from "react";

export default function App() {
  const [cor, setCor] = useState("blue");

  return (
    <div style={{ backgroundColor: cor }}>
      <h1>Exemplo de Inline Style dinâmico</h1>
      <button onClick={()=> setCor("red")}>Mudar cor</button>
    </div>
  );
}
```

<DynamicInline1 />

### Conditional 

A more complex and fun way to use Inline Styles, it's using conditions to control the style:

```jsx title="App.js" showLineNumbers {7}
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <div style={num < 0 ? { backgroundColor: "red" } : { backgroundColor: "green" }}>
      <p>Number: {num}</p>
      <button onClick={() => setNum(num+1)}>Add</button>
      <button onClick={() => setNum(num-1)}>Remove</button>
    </div>
  );
}
```
<DynamicInline2 />

:::tip
To improve code readability, you can create two external variables:

```jsx title="App.js" showLineNumbers
const redBackground = { backgroundColor: "red" };
const greenBackground = { backgroundColor: "red" };

<div style={num < 0 ? redBackground : greenBackground}>
```
:::

### More Complex Styling

```jsx title="App.js" showLineNumbers {6-10,12-15,18}
import { useState } from "react";

export default function App() {
	const [num, setNum] = useState(0);

	function getColor() {
		if (num > 0) return "green";
		else if (num < 0) return "red";
		else return "blue";
	}

	const style = {
		border: `${num}px dashed black`,
		backgroundColor: getColor(),
	};

  return (
    <div style={style}>
      <p>Number: {num}</p>
      <button onClick={() => setNum(num+1)}>Add</button>
      <button onClick={() => setNum(num-1)}>Remove</button>
    </div>
  );
}
```
<DynamicInline3 />
