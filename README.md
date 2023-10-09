

### Capstone Project -Nomaadic Cafe
### By Shankaron Mohamed 

## Description

To further challenge myself and deepen my skills, I chose TypeScript as the focus for my capstone project. This decision arose from my desire to expand my TypeScript proficiency, an area not formally covered in the curriculum, while building upon the foundational knowledge acquired during the Epicodus. For my capstone project, I developed a coffee App using TypeScript, JavaScript, React, Node.js, and Firebase/Firestore for secure data storage and retrieval.

This project allows users to login with their email and password, sign up for an account if they don't already have one and browse a coffee menu. Users could seamlessly manage their shopping carts, adjusting quantities or removing items as needed, with authentication required for access. 

Setup/Installation Requirements 💻

- In the terminal run these commands:

$ git clone Nomadic-co

$ cd Nomadic.co

Then enter:

$ touch .gitignore

Add the following to .gitignore:

    obj 
    bin 
    appsettings.json
Navigate to the project folder:

$ cd PokedexClient

Add an appsettings.json file:

$ touch appsettings.json

Add the following to appsettings.json, replacing [user-id] and [password] with your MySQL username and password. Give the database a name by replacing [database-name].



Available plugins:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Setup/Installation Requirements
npm install firebase@9

## Known Bugs
- None
