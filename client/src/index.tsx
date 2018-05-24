import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import '@blueprintjs/core/lib/css/blueprint.css';

import { App, About } from './components';
import { todosReducer } from './reducers';

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
        <div>
          <Link to="/">Root</Link>
          <Link to="/about">About</Link>
        </div>

        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(renderedHTML, root);
