const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes would go here

// create a todo

app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;

        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",[
                description
            ]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});


// get all todos

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query(
            "SELECT * FROM todo"
        );
        res.json(allTodos.rows);
    } catch (error) {
        console.error(err.message);
    }
})


// get a todo

app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", [
                id
            ]);

        res.json(todo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
})

// update a todo

app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updateTodo = await pool.query( 
            "UPDATE todo SET description = $1 WHERE todo_id = $2",[
                description, id
            ]);
        res.json("Todo was updated");
    } catch (error) {
        console.error(err.message);
    }
})


// delete a todo

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1", [id]
        );
        res.json("Todo was deleted Successfully");

    } catch (error) {
        console.error(err.message);
    }   
}) 




app.listen(5000, () => {
    console.log('Server is running on port 5000');
})





/*
1️⃣ const express = require('express');

require('express') → loads the Express library into your project.

Express is like a toolkit that lets you create a server easily, instead of writing all code from scratch.

const express → stores this toolkit in a variable named express.

2️⃣ const app = express();

express() → creates a new Express app/server.

app is your server object, where you define routes, middlewares, and listen to requests.

Think of it as the engine of your backend.

3️⃣ const cors = require('cors');

Loads the CORS library.

CORS (Cross-Origin Resource Sharing) allows your frontend (Next.js / browser) to talk to your backend even if they are on different ports or domains.

4️⃣ Middleware: app.use(...)

Middleware → functions that run before your routes to process requests.

a) app.use(cors());

Enables CORS for all requests.

Without this, your frontend might get an error when calling APIs from a different port (like 3000 → 5000).

b) app.use(express.json());

Tells Express to automatically parse JSON data sent in requests.

Example: If frontend sends:

{ "name": "Bappy" }


express.json() lets you access it in code like:

req.body.name  // "Bappy"

5️⃣ Start Server: app.listen(5000, () => {...})

app.listen(port, callback) → tells the server to start listening for requests on port 5000.

Port → like a “door” in your computer for the server.

console.log(...) → prints a message so you know the server is running.
*/