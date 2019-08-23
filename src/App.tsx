import React, { useReducer } from "react";
import styled from "styled-components";

import { List } from "./List";

const initialState = [
  { value: "test", rest: null },
  { value: "test2", rest: null }
];

export const reducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    default:
      throw new Error();
  }
};

const App: React.FC = () => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <List list={state} dispatch={dispatch} />
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
