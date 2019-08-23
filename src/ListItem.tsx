import React, { useReducer, useEffect, useRef } from "react";
import styled from "styled-components";

type ListItemProps = {
  value: string;
  dispatch: Function;
};

export const ListItem: React.FC<ListItemProps> = ({ value, dispatch }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <StyledListItem>
      <ListItemInput
        ref={inputEl}
        value={value}
        onKeyPress={event => {
          if (event.key === "Enter") dispatch({ type: "addListItem" });
        }}
        onKeyDown={event => {
          if (event.key === "Tab") {
            event.preventDefault();
            dispatch({ type: "addList" });
          }
        }}
      />
    </StyledListItem>
  );
};

const StyledListItem = styled.li``;

const ListItemInput = styled.input`
  border: none;
  outline: none;
`;
