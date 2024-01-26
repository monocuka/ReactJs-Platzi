import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList'; 
import { TodoBtnCreate } from './components/TodoBtnCreate';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tormar curso React', completed: false},
  {text: 'Llorar con la cebolla', completed: true},
  {text: 'Dormir', completed: false},
  {text: 'Comer', completed: true}
];

function App() {
  return (
    <> {/*es lo mismo que escribir React.fragment*/}

      <TodoCounter 
      completed={16} 
      total={25} />

      <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}/>
          ) )}
          <TodoItem />

      </TodoList>

      <TodoBtnCreate />

    </>
  );
}

export default App;
