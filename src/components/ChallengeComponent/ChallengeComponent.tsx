import React from "react";
import Card from "../Card";
import "./ChallengeComponent.css";

interface TaskInterface {
  todo: Array<string>;
  progress: Array<string>;
  done: Array<string>;
}

const InitialState: TaskInterface = {
  todo: [],
  progress: [],
  done: [],
};

const ChallengeComponent: React.FC = () => {
  const [taskState, setTaskState] = React.useState<TaskInterface>(InitialState);
  const [taskInput, setTaskInput] = React.useState<string>("");

  function handleTaskCreation(e: any) {
    e.preventDefault();

    setTaskState({ ...taskState, todo: [...taskState.todo, taskInput] });
    setTaskInput("");
  }

  return (
    <div className="challenge-component-container">
      <div className="challenge-component-grid">
        <Card title="To Do" data={taskState.todo} />
        <Card title="In Progress" data={taskState.progress} />
        <Card title="Done" data={taskState.done} />
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
