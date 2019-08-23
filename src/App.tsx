import React, { useReducer } from "react";
import styled from "styled-components";

import { List } from "./List";

type State = {
  list: Array<object>;
};

const initialState = {
  list: [{ value: "test", rest: null }, { value: "test2", rest: null }]
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "addListItem":
      return state;
    case "addList":
      return state;
    default:
      throw new Error();
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addListItem = () => {
    console.log("addListItem");
  };
  const addList = () => {
    console.log("addList");
  };
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
