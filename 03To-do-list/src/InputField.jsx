import { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoContext } from "./store/todoContext";

function InputField() {
  const todo = useRef();
  const dueDate = useRef();
  const Context = useContext(TodoContext);
  const onAdd = Context.onAdd;

  const handleClick = () => {
    onAdd(todo.current.value, dueDate.current.value);
    todo.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <>
      <h1 className="text-4xl font-bold mt-5">TODO APP</h1>
      <div className="container min-w-full m-5 flex gap-5 justify-center ">
        <input
          className="border-solid border-2 border-gray-500 rounded-md text-xl p-2"
          type="text"
          placeholder="Enter to-do"
          ref={todo}
        ></input>
        <input
          className="border-solid border-2 border-gray-500 rounded-md text-xl p-2"
          type="date"
          ref={dueDate}
        ></input>
        <button
          className="text-xl py-2 px-4 bg-green-500 text-white rounded-md"
          onClick={handleClick}
        >
          <IoMdAddCircle />
        </button>
      </div>
    </>
  );
}

export default InputField;
