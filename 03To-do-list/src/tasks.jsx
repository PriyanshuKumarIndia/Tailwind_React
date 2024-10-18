import Task from "./task";
import { TodoContext } from "./store/todoContext";
import { useContext } from "react";

function Tasks() {
  const Context = useContext(TodoContext);
  const list = Context.list;
  const deleteTask = Context.deleteTask;
  return (
    <div>
      {list.length === 0 ? (
        <h1 className="ml-5 text-xl">
          ALL DONE! <br></br>Nothing to do...
        </h1>
      ) : (
        list.map((val) => (
          <Task deleteTask={deleteTask} key={val[0]} val={val}></Task>
        ))
      )}
    </div>
  );
}

export default Tasks;
