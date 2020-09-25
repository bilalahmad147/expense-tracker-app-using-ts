import React, { useState } from 'react';
import './App.css';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import { TodoListItem, Todo } from './Components/TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="App">
      <h1>Todo-List App</h1>
      <AddTodoForm />
      <TodoList />
      <ul>
        <TodoListItem todo={todos} />
        <TodoListItem todo={initialTodos[1]} />
      </ul>
    </div>
  );
}

export default App;
