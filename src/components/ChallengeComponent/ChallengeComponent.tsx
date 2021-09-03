import React from "react";
import { useTask } from "../../context/TaskContext";
import Card from "../Card";
import "./ChallengeComponent.css";

const ChallengeComponent: React.FC = () => {
  const { taskState, setTaskState } = useTask();
  const [taskInput, setTaskInput] = React.useState<string>("");

  function handleTaskCreation(e: any) {
    e.preventDefault();

    setTaskState({ ...taskState, todo: [...taskState.todo, taskInput] });
    setTaskInput("");
  }

  return (
    <div className="challenge-component-container">
      <div className="challenge-component-grid">
        <Card title="To Do" data={taskState.todo} type={0} />
        <Card title="In Progress" data={taskState.progress} type={1} />
        <Card title="Done" data={taskState.done} type={2} />
      </div>
      <form
        onSubmit={(e: any) => handleTaskCreation(e)}
        className="challenge-component-form"
      >
        <input
          type="text"
          value={taskInput}
          onChange={(e: any) => setTaskInput(e.target.value)}
          className="challenge-component-input"
          placeholder="Add Task"
        />
        <button type="submit" className="challenge-component-button">
          +
        </button>
      </form>
    </div>
  );
};

export default ChallengeComponent;
