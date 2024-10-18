import { createContext, useReducer } from "react";

export const TodoContext = createContext([]);

const itemReducer = (curr, action) => {
  let newList = curr;
  if (action.type === "NEW_ITEM") {
    let newData = [action.payload.todo, action.payload.dueDate];
    newList = [...curr, newData];
  } else if (action.type === "DEL_ITEM") {
    newList = curr.filter((vals) => vals[0] !== action.payload.taskId);
  }
  return newList;
};

const TodoContextProvider = ({ children }) => {
  const [list, dispatchlist] = useReducer(itemReducer, []);

  const deleteTask = (taskId) => {
    const newItem = {
      type: "DEL_ITEM",
      payload: {
        taskId,
      },
    };
    dispatchlist(newItem);
  };

  const onAdd = (todo, dueDate) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: {
        todo,
        dueDate,
      },
    };
    dispatchlist(newItem);
  };
  return (
    <TodoContext.Provider value={{ list, deleteTask, onAdd }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
