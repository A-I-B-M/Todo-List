
import React, { Fragment } from 'react';
import './App.css';

// components
import InputTodo from './component/inputTodo';
import ListTodo from './component/listTodo';

function App() {
  return (
    <Fragment>
      <div className="container"> 
        <InputTodo />  
        <ListTodo />
      </div>

    </Fragment>
  );
}

export default App;
