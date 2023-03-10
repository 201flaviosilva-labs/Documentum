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
		"react/prop-types": "off",
		"linebreak-style": ["warn", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["warn", "always"],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
	}
};
