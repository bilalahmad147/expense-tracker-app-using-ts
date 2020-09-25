import React from 'react';
import './App.css';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import TodoListItem from './Components/TodoListItem';

function App() {
  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <AddTodoForm />
      <TodoList />
      <TodoListItem />
    </div>
  );
}

export default App;
