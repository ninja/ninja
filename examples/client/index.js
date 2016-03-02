import 'babel-polyfill';
import {Provider} from 'react-redux';
import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {createStore} from 'redux';
import {reducers} from './reducers';
import {render} from 'react-dom';
import {routes} from './routes';

const history = createHistory();
const store = createStore(reducers);
const props = {history, routes};

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').reducers);
  });
}

render(
  <Provider store={store}>
    <Router {...props}/>
  </Provider>, global.document.getElementById('app')
);
