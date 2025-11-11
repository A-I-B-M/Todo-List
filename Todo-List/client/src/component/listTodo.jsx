import React, { Fragment, useEffect, useState } from "react";
import './css/listTodo.css';
import EditTodo from "./editTodo";

const ListTodo = () => {
    // delte todo function
    const handleDelete = async (id) => {
        try {
            const deleteTodo = await fetch (`http://localhost:5000/todos/${id}`,{
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== id)); // refresh the list without reloading so get rid of deleted todo
        } catch (err) {
            console.error(err.message);
        }

    }

   
   // render todo list
   
    const [todos, setTodos] = useState ([]);

    const getTodos = async () => {
        try {
            const response = await fetch ("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos (jsonData); // set the state render

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []); // [] to run only once
    // console.log(todos);
    
    return (
        <Fragment>
            <div className="list-todo-container">
                <h2 className="text-center mb-4">Your Todos</h2>
                <table className="todo-table">
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td>
                                    <EditTodo todo={todo} />

                                </td>
                                <td>
                                    <button className="btn-delete" onClick={() => handleDelete(todo.todo_id)}>
                                         🗑️   
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                    {/* <tbody>
                        {todos.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">No todos yet!</td>
                            </tr>
                        ) : (
                            todos.map((todo, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{todo.description}</td>
                                    <td>
                                        <button className="btn-edit" onClick={() => handleEdit(todo)}>
                                            ✏️
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn-delete" onClick={() => handleDelete(todo.todo_id)}>
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody> */}
                </table>
            </div>
        </Fragment>
    );
};

export default ListTodo;
