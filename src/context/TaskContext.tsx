import { useEffect, useContext, createContext, useState } from "react";
import { TaskInterface } from "../interfaces";
import { getClosedIssues, getOpenIssues } from "../services/state.service";

export const TaskContext = createContext<any>({});

const InitialState: TaskInterface = {
  todo: [],
  progress: [],
  done: [],
};

export default function TaskProvider({ children }: any): any {
  const [taskState, setTaskState] = useState<TaskInterface>(InitialState);

  useEffect(() => {
    (async () => {
      await populateOpenIssues();
    })();
  }, []);

  async function populateOpenIssues() {
    const openData = await getOpenIssues();
    const closedData = await getClosedIssues();

    const openAccumulator: Array<string> = openData.map((item: any) => {
      return item.title;
    });

    const closedAccumulator: Array<string> = closedData.map((item: any) => {
      return item.title;
    });

    setTaskState({
      ...taskState,
      todo: [...taskState.todo, ...openAccumulator],
      done: [...taskState.done, ...closedAccumulator],
    });
  }

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
