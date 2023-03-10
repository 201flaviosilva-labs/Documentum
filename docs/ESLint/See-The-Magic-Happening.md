---
sidebar_position: 3
---

# See the magic happening

If you open a javascript file with some errors/problems you will see some underlines.

To fix that you can add this script to your `package.json`:

```json {3} title="package.json"
...
"scripts": {
   "lint": "eslint ./"
   ...
},
...
```

Now run the command: `npm run lint` and you will all the problems listed in the terminal.

## Autofix on save

To autofix some problems on save create a new file in your root directory like this:

```json title=".vscode/settings.json" showLineNumbers
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"],
}
```

Now save your file and you will see the magic
