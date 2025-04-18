import './App.css';

import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import TodoForm from './components/TodoForm.jsx';

function App() {
  const [referesh , setRefresh] = useState(false);
 
  const handleReferesh = () =>{
    setRefresh(!referesh);
  }

  return (
      <div className='app'>
        <h1>Todo App</h1>
        <TodoForm onTodoCreated={handleReferesh} />
        <TodoList key={referesh}  />
      </div>
  );
}

export default App;
