/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const Filter = () => {
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const { filterTasks } = useTaskContext();

  const handleFilter = () => {
    filterTasks({
      priority: selectedPriority,
      date: selectedDate,
      time: selectedTime,
    });
  };

  const handleClearAll = () => {
    setSelectedPriority("all");
    setSelectedDate("");
    setSelectedTime("");
    filterTasks({
      priority: "all",
      date: "",
      time: "",
    });
  };

  //! Function to filter tasks based on the provided criteria
  useEffect(() => {
    filterTasks({
      priority: "all",
      date: "",
      time: "",
    });
  }, []);

  return (
    <>
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4 sm:flex sm:flex-wrap sm:flex-col">
        <div className="flex justify-around items-center flex-wrap mb-4">
          <div className="flex justify-between items-center space-x-4 mb-4 sm:mb-0 w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-600">
              Priority:
            </label>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="p-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="all">All</option>
              <option value="high" className="text-red-500 font-bold">
                High
              </option>
              <option value="medium" className="text-yellow-500 font-bold">
                Medium
              </option>
              <option value="low" className="text-green-500 font-bold">
                Low
              </option>
            </select>
          </div>

          <div className="mb-4 w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-600">Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="p-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-4 w-full sm:w-auto">
            <label className="text-sm font-medium text-gray-600">Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="p-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          {/* Button Container */}
          <div className="flex space-x-2">
            {/* Apply Filter Button */}
            <button
              onClick={handleFilter}
              className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Apply Filter
            </button>

            {/* Clear All Button */}
            <button
              onClick={handleClearAll}
              className="bg-red-500 text-white rounded-md p-2 hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
