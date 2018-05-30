import { Reducer } from 'redux';

/*** actions ***/
export enum TextsActionType {
  ADD   = '[texts-action] add',
  LIST  = '[texts-action] list',
}

export const TextsAddAction = (text: string) => ({ type: TextsActionType.ADD as TextsActionType.ADD, text: text });
export const TextsListAction = () => ({ type: TextsActionType.LIST as TextsActionType.LIST });
export type TextsAction =
  ReturnType<typeof TextsAddAction>
  | ReturnType<typeof TextsListAction>;

/*** reducer ***/

// TODO(jeffk): POST http request
// TODO(jeffk): GET http request

export interface TextsReducerState {
  texts: string[];
}
export const defaultState = {
  texts: []
};

export const textsReducer: Reducer<TextsReducerState> =
 (state: TextsReducerState = defaultState, action: TextsAction): TextsReducerState => {
    switch (action.type) {
      case TextsActionType.ADD:
        return { ...state, texts: [...state.texts, action.text] };
      case TextsActionType.LIST:
        return state;
      default:
        return state;
    }
  };
