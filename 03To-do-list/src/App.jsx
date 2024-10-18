import InputField from "./InputField";
import Tasks from "./tasks";
import TodoContextProvider from "./store/todoContext";

function App() {
  return (
    <>
      <TodoContextProvider>
        <center>
          <InputField></InputField>
          <Tasks></Tasks>
        </center>
      </TodoContextProvider>
    </>
  );
}

export default App;
