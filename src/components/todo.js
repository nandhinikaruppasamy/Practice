import React, { useState } from 'react';
import './todo.css'; // Importing the CSS file

function Todo() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    if (value) {
      setTodo([...todo, value]);
      setValue("");
    }
  };

  const handleDelete = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input type="text" value={value} onChange={handleChange} placeholder='Enter the item' />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <button onClick={() => handleDelete(index)} className="complete-button">Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
