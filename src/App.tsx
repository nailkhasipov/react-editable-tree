import React, { useReducer } from "react";
import styled from "styled-components";

import { CHANGE_LIST_ITEM_VALUE, ADD_LIST_ITEM, ADD_LIST } from "./types";
import { reducer } from "./reducer";
import { List } from "./List";

const initialState = {
  list: [
    { value: "test", rest: [{ value: "rest test", rest: null }] },
    { value: "test2", rest: null }
  ]
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <List
        list={state.list}
        changeListItemValue={(position: string, value: string) =>
          dispatch({
            type: CHANGE_LIST_ITEM_VALUE,
            payload: { position: position, value: value }
          })
        }
        addListItem={(position: string) =>
          dispatch({ type: ADD_LIST_ITEM, position: position })
        }
        addList={(position: string) =>
          dispatch({ type: ADD_LIST, position: position })
        }
      />
    </StyledApp>
  );
};

const StyledApp = styled.div``;

export default App;
