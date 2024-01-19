import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList'; 
import { TodoBtnCreate } from './components/TodoBtnCreate';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>

      <TodoCounter 
      completed={16} 
      total={25} />

      <TodoSearch />

      <TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      <TodoBtnCreate />

    </React.Fragment>
  );
}

export default App;
