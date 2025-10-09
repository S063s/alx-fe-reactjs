import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import __test__ from './__tests__/AddTodoForm.test.js'
import __test2__ from './__tests__/TodoList.test.js'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }


  return (
    <>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;

