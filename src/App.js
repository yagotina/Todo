import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Context from './context';

function App() {
const [todos, setTodos] = React.useState([
  { id: 1, title: 'buy milk', completed: false },
  { id: 2, title: 'buy bread', completed: true },
  { id: 3, title: 'buy eggs', completed: false },
]);

  function toggleList(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    )
  };

  function deleteItem(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function addItem() {
    const newId = (todos[todos.length-1]?.id || 0) + 1;
    const newTodo = document.getElementById('newTodo').value;

    setTodos([...todos, { id: newId, title: newTodo, completed: false }]);
  };

  return (
    <Context.Provider value={{ toggleList, deleteItem, addItem }}>
      <div className="wrapp">
        <h1 className='title'>Todo List</h1>
        <AddTodo />
        {todos.length ? <TodoList todos={todos} /> : <p>List is empty!</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
