import React, { Fragment, useState } from 'react';
import './css/inputTodo.css';




const InputTodo = () => {
    const [description, setDescription] = useState("");
    
    const onSubmitForm = async (e) => {
        e.preventDefault(); // prevent reloading the page
        try {
            // send data to backend
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/"; // refresh the page
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className='mt-5' > Amdadul Todo List </h1>   
            <form className='todo-form mt-5' onSubmit={onSubmitForm}>
            <input
                type="text"
                className='todo-input' 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='✨ Add todo...'
            />
            <button className='todo-btn'>
                🚀 Add</button>
            </form>
        </Fragment>
    ) 
};

export default InputTodo;

