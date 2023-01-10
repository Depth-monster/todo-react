import React from "react";
import { useState } from "react";
import "./TodoList.css";

function TodoList({ todos, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function remove(id) {
    let newTodo = [...todos].filter((todos) => todos.id !== id);
    setTodo(newTodo);
  }

  function lock(id) {
    let newTodo = [...todos].filter((todos) => {
      if (todos.id === id) {
        todos.complete = !todos.complete;
      }
      return todos;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todos].map( todos => {
      if (todos.id === id) {
        todos.title = value;
      }
      return todos
    });
    setTodo(newTodo)
    setEdit(null)
  }

  console.log(todos);

  return (
    <div className="todoTable">
      {todos.map((todos) => (
        <div key={todos.id}>

          {edit === todos.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{todos.title}</div>
          )}

          {edit === todos.id ? (
            <div>
              <button onClick={() => saveTodo(todos.id)}>save edition</button>
            </div>
          ) : (
            <div>
              <button onClick={() => editTodo(todos.id, todos.title)}>
                edit
              </button>
              <button onClick={() => lock(todos.id)}>lock / unlock</button>
              <button onClick={() => remove(todos.id)}>remove</button>
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
}

export default TodoList;
