/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useEffect } from "react";

// !Function to add a new task
const addTask = (todo) => {
  const newTask = {
    id: Date.now(),
    ...todo,
  };
  setTasks((prevTasks) => [...prevTasks, newTask]);
  updateLocalStorage([...tasks, newTask]);
};

//! Function to delete a task by ID
const deleteTask = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
  setFilteredTasks(filteredTasks.filter((task) => task.id !== id));
  updateLocalStorage(updatedTasks);
};

//! Function to toggle the completion status of a task by ID
const toggleComplete = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
  setFilteredTasks(
    filteredTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
  updateLocalStorage(updatedTasks);
};

//! Function to filter tasks based on the provided criteria
const filterTasks = (filterCriteria) => {
  let newFilteredTasks = [...tasks];

  // Filter by priority
  if (filterCriteria.priority && filterCriteria.priority !== "all") {
    newFilteredTasks = newFilteredTasks.filter(
      (task) => task.prio === filterCriteria.priority
    );
  }

  // Filter by date
  if (filterCriteria.date) {
    newFilteredTasks = newFilteredTasks.filter(
      (task) => task.taskDate === filterCriteria.date
    );
  }

  // Filter by time
  if (filterCriteria.time) {
    newFilteredTasks = newFilteredTasks.filter(
      (task) => task.taskTime === filterCriteria.time
    );
  }

  // Update the filtered tasks state
  setFilteredTasks(newFilteredTasks);
};

//! Function to update a task by ID
const updateTask = (id, updatedTask) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, ...updatedTask } : task
  );

  setTasks(updatedTasks);
  setFilteredTasks(updatedTasks); // You might want to adjust this based on your filtering logic

  // Save the updated tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

//! Function to update local storage
const updateLocalStorage = (updatedTasks) => {
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

// !Effect to load tasks from local storage on component mount
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(storedTasks);
  setFilteredTasks(storedTasks);
}, []);

export {
  addTask,
  deleteTask,
  toggleComplete,
  filterTasks,
  updateTask,
  updateLocalStorage,
};
