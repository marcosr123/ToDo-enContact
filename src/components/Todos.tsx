import React from "react";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ itens: Todo[] }> = (props) => {
  return (
    <>
      <ul>
        {props.itens.map((item) => (
          <TodoItem key={item.id} text={item.texto} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
