---
sidebar_position: 2
---

import {CSSGlobal1, CSSGlobal2} from "./Global.jsx";

# Global CSS

## What the hell is global CSS?

- It's the most basic way to styling in a component in React;
- The style is applied globally;
- You write your CSS in `.css` files like `style.css`;
- The CSS files most be in the `src` folder;
- Normally it's used to reset the styles and prototypes;

## Let's see the magic happening

If you create the project using `npx create-react-app my-app-name`, inside the `src` folder the `index.css`, `App.js` and `App.css`.

### Reset the files

So, for now, let's update those files to this:

```css title="index.css" showLineNumbers
/* This file it's normally used to reset styles */

body {
	width: 100vw;
	height: 100vh;
	background-color: black;
}
```

```jsx title="App.js" showLineNumbers
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Global CSS</h1>
    </div>
  );
}
```

```css title="App.css" showLineNumbers
h1 {
	color: red;
}
```

So far you will probably see a `red` title (`h1`) with the `Global CSS` content in the top left of the page:

<CSSGlobal1 />

### Add and styling new elements

But if I want to create multiple elements with the same tag but with different styles?

You just use the logic of the CSS classes

```jsx title="App.js" showLineNumbers {7-10}
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Global CSS</h1>
	  <p>General styled p 1</p>
	  <p className="my-styled-p-1">With class 1</p>
	  <p>General styled p 2</p>
	  <p className="my-styled-p-2">With class 2</p>
    </div>
  );
}
```

:::caution
In `JSX` you don't use `class` for CSS classes, you use `className`, because `class` it's a key-word in javascript.

The is others attributes with the same behavior, but we will see more a head
:::

```css title="App.css" showLineNumbers {5-15}
h1 {
	color: red;
}

p {
	color: green;
}

.my-styled-p-1 {
	color: blue;
}

.my-styled-p-2 {
	color: yellow;
}
```
<CSSGlobal2 />
