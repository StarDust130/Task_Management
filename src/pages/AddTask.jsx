/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prio, setPrio] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { addTask } = useTaskContext();

  const taskNameInputRef = useRef();

  useEffect(() => {
    taskNameInputRef.current.focus();
  }, []);

  // ! This is the function that will be called when the form is submitted 😉
  const add = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({
      title,
      desc,
      prio,
      taskDate,
      taskTime,
      completed: false,
    });
    setSuccessMessage("Task added successfully!");
    setTitle("");
    setDesc("");
    setPrio("");
    setTaskDate("");
    setTaskTime("");
    // Clear the success message after a few seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-10 font-serif text-blue-500 border-b-2 border-blue-500">
        Add Task
      </h1>

      {successMessage && (
        <div className="success-message bg-green-500 text-white p-4 mt-4 rounded-md animate-fadeIn">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={add}
        className="flex flex-col justify-center text-black font-normal items-center mt-10"
      >
        {/* Task Name */}
        <input
          ref={taskNameInputRef}
          className="border-2 border-blue-500 rounded-md p-2 w-80 outline-none"
          type="text"
          placeholder="Task Name"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Task Description */}
        <textarea
          className="border-2 border-blue-500 rounded-md p-2 w-80 mt-5 outline-none"
          type="text"
          placeholder="Task Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* Priority 😆 */}
        <div className="relative mt-3 w-80">
          <select
            value={prio}
            onChange={(e) => setPrio(e.target.value)}
            className="block cursor-pointer appearance-none w-full border-2 border-blue-500 rounded-md p-2 outline-none bg-gray-100 text-gray-700"
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
          <div className="pointer-events-none cursor-pointer absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5 7l5 5 5-5z" />
            </svg>
          </div>
        </div>
        {/* Task Date */}
        <input
          className="border-2 border-blue-500 rounded-md p-2 w-80 mt-5"
          type="date"
          placeholder="Task Date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        {/* Task Time */}
        <input
          className="border-2 border-blue-500 rounded-md p-2 w-80 mt-5"
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />

        <button
          className="border-2 border-blue-500 hover:bg-blue-700 rounded-md p-2 w-80 mt-5 bg-blue-500 text-white font-bold"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
