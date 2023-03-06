---
sidebar_position: 1
---

# Hello World

## What the hell is React?

React is:

- A **Open Source** JavaScript library for building user interfaces.
- Is used to build single-page applications.
- Allows us to create reusable UI components.

> Ok, but what that mean?

In resume, you can create a site in a different way than just make a basic site with HTML/CSS/JS.

Let's see the true power of React :)


### Hello World

```html showLineNumbers
<!DOCTYPE html>
<html>

<head>
	<title>Hello World</title>
</head>

<body>
	<h1>Hello World</h1>
</body>
</html>
```

```jsx showLineNumbers
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## ????

> Hummm, but that look like Chinese to me! I don't like that!

It's normal, lets create some code to be easier to understand

## React Social Media
- Official Web site: https://reactjs.org/
- Repo: https://github.com/facebook/react/
