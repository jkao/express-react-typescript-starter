import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './components/App';
import { todosReducer } from './reducers/todos-reducer';

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const allReducers = combineReducers({
  todosReducer,
  routing: routerReducer,
});

const store = createStore(
  allReducers,
  applyMiddleware(middleware),
);

// TODO(jeffk): debug
history.listen(location => console.log(location));

const root: HTMLElement = document.getElementById('root') as HTMLElement;
const renderedHTML = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/test" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(renderedHTML, root);
