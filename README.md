

### Capstone Project -Nomaadic Cafe
### By Shankaron Mohamed 

![Alt text](<Screen Shot 2023-10-05 at 2.23.39 PM.png>)

![Alt text](<Screen Shot 2023-10-05 at 2.24.56 PM.png>)

![Alt text](<Screen Shot 2023-10-05 at 2.25.19 PM.png>)

![Alt text](<Screen Shot 2023-10-05 at 2.25.26 PM.png>)




## Description

To further challenge myself and deepen my skills, I chose TypeScript as the focus for my capstone project. This decision arose from my desire to expand my TypeScript proficiency, an area not formally covered in the curriculum, while building upon the foundational knowledge acquired during the Epicodus. For my capstone project, I developed a coffee App using TypeScript, JavaScript, React, Node.js, and Firebase/Firestore for secure data storage and retrieval.

This project allows users to login with their email and password, sign up for an account if they don't already have one and browse a coffee menu. Users could seamlessly manage their shopping carts, adjusting quantities or removing items as needed, with authentication required for access. 

## Technologies Used 

 - Javascript 
 - Typescript 
 - React
 - Firebade/Firestore 
 - Vite
 

## Setup/Installation Requirements 


Ensure that you have Node.js and npm (Node Package Manager) installed on your computer. You can download them from the official Node.js website (https://nodejs.org/).
- In the terminal run these commands:

Navigate to the Project Directory:

- Change your current working directory to Nomadic-co

```
cd Nomadic-co
```

- To start the Vite development server and run your React app, use the following command: 

```
npm run dev
```

- This will start the development server, and you'll see your React app running at http://localhost:3000 in your browser.

- You can now begin editing your React app. The main source code for your app is located in the src directory. As you make changes to your code, Vite will automatically update your app in the browser with fast hot module reloading.

- To stop the development server, you can press Ctrl+C in the terminal where it's running.

- When you're ready to build your React app for production, you can use the following command:
```
npm run build

```


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

## Known Bugs
- None

## License
MIT Copyright (c) 2023 Shankaron Mohamed