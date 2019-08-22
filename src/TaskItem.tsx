import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type TaskItemProps = {
  task: string;
  onAddTask: Function;
};

export const TaskItem: React.FC<TaskItemProps> = ({ task, onAddTask }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <StyledTaskItem
      ref={inputEl}
      value={task}
      onKeyPress={event => {
        if (event.key === "Enter") {
          onAddTask();
        }
      }}
    />
  );
};

const StyledTaskItem = styled.input`
  border: none;
  outline: none;
`;
