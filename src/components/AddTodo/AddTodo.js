import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTodo({ todos, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todos,
      {
        id: uuidv4(),
        title: value,
        complete: false,
      },
    ]);
    setValue("");
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>add</button>
    </div>
  );
}

export default AddTodo;
