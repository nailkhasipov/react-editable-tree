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
      const listItem = eval(`state.list${action.payload.position}`);
      listItem.value = action.payload.value;
      return { list: [...state.list] };
    case ADD_LIST_ITEM:
      const index = action.position.charAt(action.position.length - 2);
      const list = eval(`state.list${action.position.slice(0, -3)}`);
      list.splice(index + 1, 0, newListItem);
      return { list: [...state.list] };
    case ADD_LIST:
      // state.list[parseInt(action.position)].rest = [newListItem];
      return { list: [...state.list] };
    default:
      throw new Error();
  }
};
