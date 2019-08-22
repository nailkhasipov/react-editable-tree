import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

type TaskItemProps = {
  task: string;
  onAddTask: Function;
  onAddTaskList: Function;
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onAddTask,
  onAddTaskList
}) => {
  const [value, setValue] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <StyledTaskItem
      ref={inputEl}
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyPress={event => {
        if (event.key === "Enter") onAddTask();
      }}
      onKeyDown={event => {
        if (event.key === "Tab") {
          event.preventDefault();
          onAddTaskList();
        }
      }}
    />
  );
};

const StyledTaskItem = styled.input`
  border: none;
  outline: none;
`;
