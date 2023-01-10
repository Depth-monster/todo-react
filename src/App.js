import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css";
import { useState } from "react";

function App() {

  const [todos, setTodo] = useState([
  { id:1,
    title:'first task',
    complete:false  
  }, 
  { id:2,
    title:'second task',
    complete:false  }, 
  {
    id:3,
    title:'third task',
    complete:false  
  }]);

  return (
    <div className="App">
      <div>
        <Header />
        <AddTodo setTodo={setTodo} todos={todos} />
        <TodoList todos={todos} setTodo={setTodo}/>
      </div>
    </div>
  );
}

export default App;
