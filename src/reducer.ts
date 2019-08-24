import {
  State,
  ListItemInterface,
  ListActionTypes,
  CHANGE_LIST_ITEM_VALUE,
  ADD_LIST_ITEM,
  ADD_LIST
} from "./types";

const newListItem: ListItemInterface = { value: "", rest: null };

export const reducer = (state: State, action: ListActionTypes) => {
  switch (action.type) {
    case CHANGE_LIST_ITEM_VALUE:
      state.list[parseInt(action.payload.position)].value =
        action.payload.value;
      return { list: [...state.list] };
    case ADD_LIST_ITEM:
      return { list: [...state.list, newListItem] };
    case ADD_LIST:
      state.list[parseInt(action.position)].rest = [newListItem];
      return { list: [...state.list] };
    default:
      throw new Error();
  }
};
