import React, { useState, useEffect } from "react";
import './css/editTodo.css';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState("");

    // Update description whenever the todo prop changes
    useEffect(() => {
        if (todo) setDescription(todo.description);
    }, [todo]);

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    // update description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch (`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"; // refresh the page
        } catch (err) {
            console.error(err.message);
        }   
    };

    return (
        <>
            <button className="todo-btn" onClick={openModal}>✏️</button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Edit Todo</h3>
                        <input 
                            type="text" 
                            className="modal-input" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <div className="modal-buttons">
                            <button className="btn-save" onClick={updateDescription}>Save</button>
                            <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditTodo;
