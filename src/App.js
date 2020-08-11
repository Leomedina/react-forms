import React from 'react';
import BoxList from './BoxList';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <>
      <h1>ColorBoxMaker</h1>
      <BoxList />
      <h1>To-Do:</h1>
      <TodoList />
    </>
  );
}

export default App;
