import { Reducer } from 'redux';

/*** actions ***/
export enum TodoActionType {
  ADD = '[todo-action] add',
  GET = '[todo-action] get',
}
export interface ITodoAction { type: TodoActionType; }

/*** reducer ***/
export const todosReducer: Reducer<any> = (state = {}, action: ITodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD:
    case TodoActionType.GET:
      return state;
    default:
      return state;
  }
};
