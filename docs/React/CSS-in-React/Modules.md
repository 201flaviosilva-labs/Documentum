import {CSSModules1, CSSModules2, SCSSModules} from "./Modules.jsx";

# CSS Modules

## What the hell is CSS modules?

- The CSS modules it's a React native way to work with scoped CSS (that means the style only will be applied in the component);
- The CSS files should be like this: `ComponentName.module.css`;
- Normally it's used to basic project and prototypes;

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
import styles from "./App.module.css"; // File name changed

export default function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>CSS Modules</h1>
    </div>
  );
}
```

```css title="App.module.css" showLineNumbers
.App {
  text-align: center;
}

.title {
  color: red;
}
```

:::note
Note that the CSS file changed the name to `App.module.css`
:::

So far you will probably see a `red` title (`h1`) with the `CSS Modules` content in the top center of the page:

<CSSModules1 />

### Add and styling new elements

To be more explicit what CSS modules does let's create new components.

The file structure should be like this:

```text {3-5}
...
src/
	components/
		MyTitle.js
		MyTitle.module.css
	App.js
	App.module.css
	index.css
	index.js
...
```

```jsx title="App.js" showLineNumbers {2,8}
import styles from "./App.module.css";
import MyTitle from "./components/MyTitle";

export default function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>CSS Modules</h1>
      <MyTitle />
    </div>
  );
}
```

```jsx title="components/MyTitle.js" showLineNumbers
import React from "react";
import styles from "./MyTitle.module.css";

export default function MyTitle() {
	return (
		<h2 className={styles.title}>MyTitle</h2>
	)
}
```
```css title="components/MyTitle.module.css" showLineNumbers
.title {
  background: green;
}
```

Now you probably see a `red` text (`h1`) with `CSS Modules` content and above that title, you should see other text but with the `green` `background` and the color still `black`, that proves, using CSS this way you have more control of the styles because it's scoped.

<CSSModules2 />

## SCSS Modules

> I don't like vanilla CSS, so I'm limited to use CSS modules, I can't use SASS modules?

**Of course not!**

First you need to instal a new dependency [node-sass](https://www.npmjs.com/package/node-sass): `npm i node-sass -D`


Let's update ours file to make more sense:

```jsx title="components/MyTitle.js" showLineNumbers {2,6-9}
import React from "react";
import styles from "./MyTitle.module.scss";

export default function MyTitle() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>MyTitle</h2>
			<h3>Sub title</h3>
		</div>
	)
}
```
```scss title="components/MyTitle.module.scss" showLineNumbers
.container {
  margin-top: 100px;
  border: 1px solid black;

  .title {
    background: green;
  }

  h3 {
    color: blueviolet;
  }
}
```

<SCSSModules />
