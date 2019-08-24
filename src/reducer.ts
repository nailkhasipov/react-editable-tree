import {
  State,
  ListItemInterface,
  ListActionTypes,
  ADD_LIST_ITEM,
  ADD_LIST
} from "./types";

const newListItem: ListItemInterface = { value: "", rest: null };

export const reducer = (state: State, action: ListActionTypes) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return { list: [...state.list, newListItem] };
    case ADD_LIST:
      const position = parseInt(action.position);
      state.list[position].rest = [newListItem];
      return { list: [...state.list] };
    default:
      throw new Error();
  }
};
