import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Installation And Configuration

## Install and Init

Run this command in the folder of your project to install `eslint` as a dev dependency.

```sh
npm i eslint -D
```

To `eslint` starts to makes is own magics for us we need to configure.

Run this command to open a interactive configuration:

```sh
./node_modules/.bin/eslint --init
```

Or you could just used this on, that makes de same:

```sh
npm init @eslint/config
```

## Initial configuration

Probably will show a "menu" like this one:

:::tip
**If it's too much pressure now, don't worry you can change the configuration later.**
:::

### How would you like to use ESLint?

```txt
? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems
  To check syntax, find problems, and enforce code style
```

This is the fist question and you will select base on your team needs and your project.

<Tabs>
<TabItem value="syntax only" label="Syntax only" default>
It helps you correct your syntax and make sure it conform to standard.
</TabItem>

<TabItem value="syntax and problems" label="Syntax and find problems">
This option will check for the syntax and also help to find any problems in your code base:

```js {1,3} title="index.js" showLineNumbers
const isTrue = true;

function myFunction(params) {
  const message = "count";

  for (let i = 0; i < 3; i++) {
    console.log(message + " " + (i + 1));
  }
}

myFunction();
```

</TabItem>

<TabItem value="syntax problems and style" label="Syntax, find problems, and enforce code style">
This option will help you check for syntax, find problem and enforce style.

That mean (for example) if your team agreed to use `;` and `""` instead of `''` the eslint will show a **warning** or a **error** in the code.

```js {1,3-4,11} title="index.js original" showLineNumbers
const isTrue = true;

function myFunction(params) {
  const message = "count";

  for (let i = 0; i < 3; i++) {
    console.log(message + " " + (i + 1));
  }
}

myFunction();
```

```js {1-2,4,9} title="index.js fixed" showLineNumbers
function myFunction() {
  const message = "count";

  for (let i = 0; i < 3; i++) {
    console.log(message + " " + (i + 1));
  }
}

myFunction();
```

</TabItem>
</Tabs>

### What type of modules does your project use?

```txt
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

<Tabs>
<TabItem value="Javascript" label="Javascript module (import/export)" default>

This option is used for project that (normally) run in the browser with babel. For example project with React, Vue, Svelte, etc....

```js {1,7} title="module.js" showLineNumbers
import { randomString } from "math-utils";

function myFunction() {
  return randomString();
}

export default myFunction();
```

</TabItem>

<TabItem value="CommonJS" label="CommonJS (require/exports)">

Normally used for **node** project

```js {1,7} title="common.js" showLineNumbers
const { randomString } = require("math-utils");

function myFunction() {
  return randomString();
}

exports.myFunction = myFunction;
```

</TabItem>
</Tabs>

### Which framework does your project use?

```txt
? Which framework does your project use? …
▸ React
  Vue.js
  None of these
```

I think this one it's not really need any explication :)

### Does your project use TypeScript?

```txt
? Does your project use TypeScript? ‣ No / Yes
```

Well if you are using `TypeScript` check this option.

### Where does your code run?

```txt
? Where does your code run?
✔ Browser
  Node
```

Self descriptive question :)

### How would you like to define a style for your project?

:::note
This option only will appear if you selected `To check syntax, find problems, and enforce code style` in the first question.
:::

```txt
? How would you like to define a style for your project? …
▸ Use a popular style guide
  Answer questions about your style
```

If you select:

- `Use a popular style guide` will apear a list of some popular comuns templates styles for javascript code select;
- `Answer questions about your style` you will answer some questions that to generate you own style formatter;

### Which style guide do you want to follow?

:::note
This option only will appear if you selected `To check syntax, find problems, and enforce code style` in the first question and you selected `Use a popular style guide` in the last question.
:::

```txt
? Which style guide do you want to follow? …
▸ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo
```

The best way to select one of the options above is to try it in action in your project.

But I will leave here some personal opinion about every one:

- `Airbnb` -> uses `''` and `;` and in `React` you need to use `.jsx` (Mehh)
- `Standard` -> uses `''` and not use `;` (I hate this one)
- `Google` -> uses `''` and `;` all function needs to be documented with `JSDoc` (I don't like this)
- `XO` -> uses `''` and `;`, use "tabs" instead of spaces (Mehh)

### What type of modules does your project use?

:::note
This option only will appear if you selected `To check syntax, find problems, and enforce code style` in the first question.
:::

:::danger
Improve this
:::

### What format do you want your config file to be in?

```txt
? What format do you want your config file to be in? …
▸ JavaScript
  YAML
  JSON
```

This question is the least important and it's just preferred, I like to go with javascript option

## Configuration generated successfully

Depending on the option you selected will be created a file more or less like this in your file structure:

```txt {2} title="project file structure"
index.js
.eslintrc.js
package.json
...
```

```js title=".eslintrc.js" showLineNumbers
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
```
