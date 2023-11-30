/* eslint-disable react/prop-types */
import Filter from "../components/Filter";
import { useTaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { toggleComplete, deleteTask, filteredTasks } = useTaskContext();
  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 mb-40">
        <h1 className="text-4xl font-bold text-center mb-6 shadow-lg font-serif text-blue-500">
          Task List
        </h1>
        {/* Filter Component */}
        <Filter />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white text-black font-bold rounded-lg overflow-hidden shadow-md cursor-pointer p-6 transition duration-300 transform hover:scale-105 ${
                task.completed ? "opacity-50" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                  />
                  <span
                    className={`ml-2 text-lg ${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <span
                    className={`${
                      task.prio === "high"
                        ? "bg-red-500 text-white rounded-xl py-2 px-2 font-bold"
                        : task.prio === "medium"
                        ? "bg-yellow-500 text-white rounded-xl py-2 px-2 font-semibold"
                        : task.prio === "low"
                        ? "bg-green-500 text-white rounded-xl py-2 px-2 font-normal"
                        : "bg-none" // set bg-none when prio is empty
                    }`}
                  >
                    {task.prio}
                  </span>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => toggleComplete(task.id)}
                  >
                    {task.completed ? (
                      <img
                        src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/external-undo-arrow-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png"
                        alt="undo"
                        className="w-5 h-5 shadow-lg shadow-white/50"
                      />
                    ) : (
                      ""
                    )}
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteTask(task.id)}
                  >
                    <img
                      src="https://img.icons8.com/plasticine/100/filled-trash.png"
                      alt="delete"
                      className="w-8 h-8"
                    />
                  </button>
                </div>
              </div>
              {/* Description  🫠*/}
              <p className="text-gray-700 mb-4">{task.desc}</p>

              {/* Date and Time ⏲️ */}
              <div className="flex justify-between text-gray-500">
                <span>
                  {task.taskDate === "" ? (
                    ""
                  ) : (
                    <img
                      src="https://img.icons8.com/color/48/calendar--v1.png"
                      alt="date"
                      className="w-5 h-5 shadow-lg shadow-white/50"
                    />
                  )}

                  {task.taskDate}
                </span>
                <span>
                  {task.taskTime === "" ? (
                    ""
                  ) : (
                    <img
                      src="https://img.icons8.com/office/16/time.png"
                      alt="time"
                      className="w-5 h-5 shadow-lg shadow-white/50"
                    />
                  )}
                  {task.taskTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TaskList;
