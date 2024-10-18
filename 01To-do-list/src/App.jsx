import { useState } from "react";
import InputField from "./InputField";
import Tasks from "./tasks";

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
      <center>
        <InputField onAdd={onAdd}></InputField>
        <Tasks list={list} deleteTask={deleteTask}></Tasks>
      </center>
    </>
  );
}

export default App;
