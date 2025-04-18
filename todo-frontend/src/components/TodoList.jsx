import React from "react";
import { useState, useEffect } from "react";
import { getTodo, deleteTodo } from "../api/todoApi";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await getTodo();
      setTodos(response.data);
    } catch (error) {
      console.error("X error fetching data", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (error) {
      console.error("X error during deleting the data ", error);
    }
  };

  return <div>
    <h2>Todo list</h2>
    {
      todos.length===0 ? (<p>NO todos found</p>) : (
          <ul>
            {todos.map((todo)=>{
             return <li key={todo.id}>
                <strong>{todo.title}</strong> - {todo.description} {todo.is_completed && "✅"} <button onClick={()=>handleDelete(todo.id)} style={{marginLeft:"10px"}}>delete</button>
              </li>
            })}
          </ul>
      )
    }
  </div>;
}

export default TodoList;
