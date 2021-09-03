import React from "react";
import { useTask } from "../../context/TaskContext";
import { CardItemProps } from "../../interfaces";
import "./CardItem.css";

const CardItem: React.FC<CardItemProps> = ({ title, type }) => {
  const { taskState, setTaskState } = useTask();

  function handleNext() {
    let taskClone = { ...taskState };

    switch (type) {
      case 0:
        taskClone.progress.push(title);
        taskClone.todo = taskClone.todo.filter(
          (item: string) => item !== title
        );
        setTaskState(taskClone);
        break;
      case 1:
        taskClone.done.push(title);
        taskClone.progress = taskClone.progress.filter(
          (item: string) => item !== title
        );
        setTaskState(taskClone);
        break;
      case 2:
        break;
    }
  }

  function handlePrevious() {
    let taskClone = { ...taskState };

    switch (type) {
      case 0:
        break;
      case 1:
        taskClone.todo.push(title);
        taskClone.progress = taskClone.progress.filter(
          (item: string) => item !== title
        );
        setTaskState(taskClone);
        break;
      case 2:
        taskClone.progress.push(title);
        taskClone.done = taskClone.done.filter(
          (item: string) => item !== title
        );
        setTaskState(taskClone);
        break;
    }
  }

  return (
    <div className="card-item-container">
      <button
        className="card-item-button card-item-button--left"
        disabled={type === 0}
        onClick={handlePrevious}
      >
        &larr;
      </button>
      <p className="card-item-title">{title}</p>
      <button
        className="card-item-button card-item-button--right"
        disabled={type === 2}
        onClick={handleNext}
      >
        &rarr;
      </button>
    </div>
  );
};

export default CardItem;
