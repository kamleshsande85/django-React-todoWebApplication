import React from "react";
import { useState } from "react";
import { createTodo } from "../api/todoApi";

function TodoForm({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    const newTodo = {
      title,
      description,
      is_completed: false,
    };

    try {
      await createTodo(newTodo);
      setTitle("");
      setDescription("");
      onTodoCreated();
    } catch (error) {
      console.error("X error during creating new todo ", error);
    }
  };

  return <div>
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h2>➕  Add todos</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
        <br />
        <textarea name="" id="" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} rows="3" cols="60"></textarea>
        <br />
        <button type="submit">✅ Add todo</button>
    </form>

  </div>;
}

export default TodoForm;
