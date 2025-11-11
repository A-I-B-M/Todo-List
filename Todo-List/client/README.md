# Amdadul Todo App

A modern, full-stack **Todo List application** built with **React**, **Node.js**, **Express**, and **PostgreSQL**.  
It allows users to **add, edit, and delete tasks** with a sleek UI and responsive design.  

---

## Features

- **Add Todo** – Create new tasks with ease.  
- **Edit Todo** – Update existing tasks via modal popups.  
- **Delete Todo** – Remove tasks instantly.  
- **Responsive UI** – Works on desktop and mobile.  
- **Modern Design** – Colorful buttons, hover effects, and smooth transitions.  

---

## Technologies Used

| Layer        | Technology / Library       |
|-------------|----------------------------|
| Frontend    | React, JSX, CSS            |
| Backend     | Node.js, Express           |
| Database    | PostgreSQL                 |
| Styling     | CSS (Custom + Flexbox/Grid)|

---

## Project Structure

react-todo/
│
├── server/ # Backend folder
│ ├── db.js # PostgreSQL connection
│ ├── index.js # Express server & routes
│ └── package.json # Server dependencies
│
├── client/ # Frontend folder
│ ├── src/
│ │ ├── components/ # React components
│ │ │ ├── InputTodo.jsx
│ │ │ ├── ListTodo.jsx
│ │ │ └── EditTodo.jsx
│ │ ├── App.jsx
│ │ ├── index.jsx
│ │ └── css/ # Styling files
│ └── package.json # Frontend dependencies
│
└── README.md # Project description



### Backend

cd server
npm install
node index.js      

cd client
npm install
npm start