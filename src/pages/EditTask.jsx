/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const EditTask = () => {
  const [editableTaskIds, setEditableTaskIds] = useState({});
  const [updatedTasks, setUpdatedTasks] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const { tasks, updateTask } = useTaskContext();

  const handleEdit = (id) => {
    setEditableTaskIds((prevIds) => ({ ...prevIds, [id]: true }));
    const taskToEdit = tasks.find((task) => task.id === id);
    setUpdatedTasks((prevTasks) => ({ ...prevTasks, [id]: { ...taskToEdit } }));
  };

  const handleSave = (id) => {
    setSuccessMessage("Task Edit successfully!");
    updateTask(id, updatedTasks[id]);
    setEditableTaskIds((prevIds) => ({ ...prevIds, [id]: false }));
    // Clear the success message after a few seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-40">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">
        Update Task
      </h1>
      {successMessage && (
        <div className="success-message lg:ml-[350px] lg:mb-10 mb-5 ml-[95px] bg-blue-500 text-white p-4 mt-4 rounded-md animate-fadeIn">
          {successMessage}
        </div>
      )}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white text-black font-bold rounded-lg overflow-hidden shadow-md cursor-pointer p-6 transition duration-300 transform hover:scale-105 ${
              editableTaskIds[task.id] ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="flex flex-col mb-4">
              <span className="text-lg font-bold text-purple-600">Title:</span>
              {editableTaskIds[task.id] ? (
                <input
                  type="text"
                  className="border p-2 focus:outline-none focus:ring focus:border-blue-300"
                  value={updatedTasks[task.id]?.title || ""}
                  onChange={(e) =>
                    setUpdatedTasks((prevTasks) => ({
                      ...prevTasks,
                      [task.id]: {
                        ...prevTasks[task.id],
                        title: e.target.value,
                      },
                    }))
                  }
                />
              ) : (
                <span className="text-purple-800">{task.title}</span>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-lg font-bold text-blue-600">
                Description:
              </span>
              {editableTaskIds[task.id] ? (
                <textarea
                  className="border p-2 focus:outline-none focus:ring focus:border-blue-300"
                  value={updatedTasks[task.id]?.desc || ""}
                  onChange={(e) =>
                    setUpdatedTasks((prevTasks) => ({
                      ...prevTasks,
                      [task.id]: {
                        ...prevTasks[task.id],
                        desc: e.target.value,
                      },
                    }))
                  }
                />
              ) : (
                <span className="text-blue-800">{task.desc}</span>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-lg font-bold">Priority:</span>
              {editableTaskIds[task.id] ? (
                <select
                  value={updatedTasks[task.id]?.prio || ""}
                  onChange={(e) =>
                    setUpdatedTasks((prevTasks) => ({
                      ...prevTasks,
                      [task.id]: {
                        ...prevTasks[task.id],
                        prio: e.target.value,
                      },
                    }))
                  }
                  className="border p-2 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option
                    disabled
                    value=""
                    className="cursor-pointer hover:bg-gray-500"
                  >
                    Select Priority
                  </option>
                  <option
                    value="high"
                    className="bg-red-500 text-white font-bold cursor-pointer"
                  >
                    High
                  </option>
                  <option
                    value="medium"
                    className="bg-yellow-500 text-gray-800 cursor-pointer"
                  >
                    Medium
                  </option>
                  <option
                    value="low"
                    className="bg-green-500 text-white font-bold cursor-pointer"
                  >
                    Low
                  </option>
                </select>
              ) : (
                <span
                  className={`${
                    task.prio === "high"
                      ? "bg-red-500 text-white rounded-lg text-center -2 py-2 px-4 font-bold w-20"
                      : task.prio === "medium"
                      ? "bg-yellow-500 text-white rounded-lg text-center mt-2 py-2 px-4 font-semibold w-20"
                      : task.prio === "low"
                      ? "bg-green-500 text-white rounded-lg text-center mt-2 py-2 px-4 font-normal w-20"
                      : "bg-none" // set bg-none when prio is empty
                  }`}
                >
                  {task.prio}
                </span>
              )}
            </div>

            <div className="flex justify-center mt-4">
              {editableTaskIds[task.id] ? (
                <button
                  className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => handleSave(task.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="relative rounded-md p-2 f overflow-hidden group"
                  onClick={() => handleEdit(task.id)}
                >
                  <img
                    src="https://img.icons8.com/cotton/40/create-new--v1.png"
                    alt="create-new--v1"
                    className="w-full h-full transition-transform transform group-hover:scale-110"
                  />
                  <span className="tooltip-container tooltiptext">Edit</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditTask;
