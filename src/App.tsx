import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todo: string) => {
    const novoTodo = new Todo(todo);
    setTodos((antTodos) => {
      return antTodos.concat(novoTodo)
    });
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos itens={todos} />
    </div>
  );
}

export default App;
