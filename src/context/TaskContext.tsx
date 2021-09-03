import { useContext, createContext, useState } from "react";
import { TaskInterface } from "../interfaces";

export const TaskContext = createContext<any>({});

const InitialState: TaskInterface = {
  todo: [],
  progress: [],
  done: [],
};

export default function TaskProvider({ children }: any): any {
  const [taskState, setTaskState] = useState<TaskInterface>(InitialState);

  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask(): any {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTask must be within TaskContext");

  const { taskState, setTaskState } = context;
  return { taskState, setTaskState };
}
