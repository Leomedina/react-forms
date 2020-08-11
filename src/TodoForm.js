import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({ task: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData({ task: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Todo:</label>
      <input
        id="task"
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add</button>
    </form >
  );
}

export default TodoForm;