import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';


const TodoList = () => {
  const INITIAL_STATE = [
    { id: uuidv4(), task: "run" },
    { id: uuidv4(), task: "eat" }
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, { id: uuidv4(), ...newTodo }]);
  }

  const removeTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray);
    
  }
  return (
    <>
      <ul>
        {todos.map(({ id, task }) =>
          <>
            <li>{task}</li>
            <button onClick={() => removeTodo(id)}>X</button>
          </>
        )}
      </ul>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoList;