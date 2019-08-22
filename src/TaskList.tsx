import React, { useState } from "react";
import styled from "styled-components";

import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState(["test"]);
  const addTask = () => {
    setTasks([...tasks, ""]);
  };
  return (
    <StyledTaskList>
      {tasks.map((task: string, index: number) => (
        <li>
          <TaskItem key={index} task={task} onAddTask={addTask} />
        </li>
      ))}
    </StyledTaskList>
  );
};

const StyledTaskList = styled.ul``;
