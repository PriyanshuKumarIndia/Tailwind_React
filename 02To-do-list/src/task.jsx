import { MdDelete } from "react-icons/md";

function Task({ val, deleteTask }) {
  return (
    <div className="container max-w-60 m-5 flex gap-2 min-w-full justify-center">
      <div className="min-w-60">
        <h2 className="text-xl py-2 text-start">{val[0]}</h2>
      </div>
      <div className="min-w-56">
        <h2 className="text-xl py-2 px-4 text-start">{val[1]}</h2>
      </div>
      <div className="">
        <button
          className="text-xl py-2 px-4 bg-red-600 text-white rounded-md"
          onClick={() => deleteTask(val[0])}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default Task;
