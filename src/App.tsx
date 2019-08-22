import React from "react";
import styled from "styled-components";

import { TaskList } from "./TaskList";

const App: React.FC = () => {
  return (
    <StyledApp>
      <TaskList />
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
