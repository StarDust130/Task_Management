import { createContext, useContext } from "react";

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export default TaskContext;
