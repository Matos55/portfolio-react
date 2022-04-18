# Create a new repo at Github

> then, git clone HTTPS URL into a custom folder wherever we want

> then, cd into the new folder created

<br>

<br>

# Create a new react app with typescript:

> npx create-react-app my-app --template typescript (git init is created automatically under the hood)

<br>

<br>

# install gh-pages and necessary tweaks:

> npm i gh-pages -D

> Add the following:

```html
"scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build", },
```

> npm run deploy

> go to github page => settings (top row ribbon) => Code and Automation (left column ribbon) => Pages
