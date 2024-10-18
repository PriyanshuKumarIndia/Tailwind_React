import Task from "./task";

function Tasks({ list, deleteTask }) {
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
