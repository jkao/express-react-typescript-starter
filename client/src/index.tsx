import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import '@blueprintjs/core/lib/css/blueprint.css';

import App from './components/App';
import { TextsReducerState, textsReducer } from './reducers/texts-reducer';

type StoreState = TextsReducerState;
const store = createStore<StoreState>(
  textsReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
