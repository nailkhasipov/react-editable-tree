export interface ListItem {
  value: string;
  rest: null | Array<ListItem>;
}

export type State = {
  list: Array<ListItem>;
};
