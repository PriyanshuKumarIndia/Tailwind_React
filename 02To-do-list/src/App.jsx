import { useState } from "react";
import InputField from "./InputField";
import Tasks from "./tasks";
import TodoContext from "./store/todoContext";

function App() {
  const [list, setList] = useState([]);

  const deleteTask = (taskId) => {
    let newList = list.filter((vals) => vals[0] !== taskId);
    setList(newList);
  };

  const onAdd = (todo, dueDate) => {
    let newData = [todo, dueDate];
    let newList = [...list, newData];
    setList(newList);
  };

  return (
    <>
      <TodoContext.Provider value={{ list, deleteTask, onAdd }}>
        <center>
          <InputField></InputField>
          <Tasks></Tasks>
        </center>
      </TodoContext.Provider>
    </>
  );
}

export default App;
