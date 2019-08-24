export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const ADD_LIST = "ADD_LIST";

export interface ListItemInterface {
  value: string;
  rest: null | Array<ListItemInterface>;
}

export type State = {
  list: Array<ListItemInterface>;
};

interface AddListItemAction {
  type: typeof ADD_LIST_ITEM;
  position: string;
}

interface AddListAction {
  type: typeof ADD_LIST;
  position: string;
}

export type ListActionTypes = AddListItemAction | AddListAction;
