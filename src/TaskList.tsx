import React, { useState } from "react";
import styled from "styled-components";

import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([""]);
  const addTask = () => {
    setTasks([...tasks, ""]);
  };
  const addTaskList = () => {
    //@ts-ignore
    setTasks([...tasks, [""]]);
  };
  return (
    <StyledTaskList>
      {tasks.map((task: any, index: number) => {
        if (typeof task === "string")
          return (
            <li>
              <TaskItem
                key={index}
                task={task}
                onAddTask={addTask}
                onAddTaskList={addTaskList}
              />
            </li>
          );
        if (typeof task === "object") return <TaskList />;
      })}
    </StyledTaskList>
  );
};

const StyledTaskList = styled.ul``;
