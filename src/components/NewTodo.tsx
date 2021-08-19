import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const todoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const textInput = todoText.current!.value;
    if (textInput.trim().length === 0) {
      return;
    }
    props.onAddTodo(textInput)
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">Texto da Tarefa</label>
      <input type="text" id="text" ref={todoText} />
      <button type="submit">Adicionar ToDo</button>
    </form>
  );
};

export default NewTodo;
