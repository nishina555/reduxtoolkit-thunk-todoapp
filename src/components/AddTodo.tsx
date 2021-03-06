import React, { useState } from "react";
import { postTodo } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const updateInput = (input: string) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(postTodo(input));
    setInput("");
  };
  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
