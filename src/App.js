import { TodoItem } from './components/TodoItems';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList'; 
import { TodoBtnCreate } from './components/TodoBtnCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />

      <TodoSearch />

      <TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      <TodoBtnCreate />

    </div>
  );
}

export default App;
