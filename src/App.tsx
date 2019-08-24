import React, { useReducer } from "react";
import styled from "styled-components";

import { reducer } from "./reducer";
import { List } from "./List";

const initialState = {
  list: [{ value: "test", rest: null }, { value: "test2", rest: null }]
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <List
        list={state.list}
        addListItem={() => dispatch({ type: "addListItem" })}
        addList={() => dispatch({ type: "addList" })}
      />
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
