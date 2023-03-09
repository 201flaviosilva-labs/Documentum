---
sidebar_position: 4
---

# Some Example Configs for React


My new dependencies:
```sh
npm i eslint eslint-plugin-react eslint-config-react-app -D
```

```txt title=".eslintignore" showLineNumbers
node_modules
```

```js title=".eslintrc.js" showLineNumbers
module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
	},
	"extends": [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
	],
	"rules": {
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"linebreak-style": [
			"warn",
			"unix"
		],
		"quotes": [
			"warn",
			"double"
		],
		"semi": [
			"warn",
			"always"
		],
		"no-unused-vars": [
			"warn", 
			{
				"vars": "all",
				"args": "after-used",
				"ignoreRestSiblings": false,
			}
		],
		"react/prop-types": "off"
	}
};
```

```json title=".vscode/settings.json" showLineNumbers
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "html", "css", "scss"],
}
```
