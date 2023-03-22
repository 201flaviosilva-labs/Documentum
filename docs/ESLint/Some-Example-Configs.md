# Some Example Configs for React


My new dependencies:
```sh
npm i -D eslint-plugin-jest-extended eslint-config-react-app eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
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
		"jest": true,
	},
	"plugins": [
		"react",
		"eslint-plugin-react",
		"jest",
		"jest-extended",
	],
	"extends": [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:jsx-a11y/recommended",
		"react-app",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jest/recommended",
		"plugin:jest-extended/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"react/jsx-uses-react": "error",
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-vars": "error",
		"react/prop-types": "off",
		"linebreak-style": ["warn", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["warn", "always"],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"import/no-unresolved": ["error", { "ignore": ["^[^.]"] }],
		"import/order": [
			"warn", {
				"groups": ["builtin", "external", "object", "type", "internal", "parent", "sibling", "index",],
				"alphabetize": { "order": "asc", "caseInsensitive": true, },
			},
		]
	},
	"settings": {
		"react": {
			"version": "detect",
		},
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx"]
			}
		}
	}
};
```

```json title=".vscode/settings.json" showLineNumbers
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"],
}
```

```txt title="My answers to the prompt config"
✔ What style of indentation do you use? · tab
✔ What quotes do you use for strings? · double
✔ What line endings do you use? · unix
✔ Do you require semicolons? · Yes
```
