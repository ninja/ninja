import {Provider} from 'react-redux';
import React from 'react';
import {RoutingContext} from 'react-router';
import {compose, createStore} from 'redux';
import {reducers} from '../reducers';
import {register, update} from 'ruto';
import {renderToString} from 'react-dom/server';

export const plugin = {
  options: {
    getRoutes: () => require('../routes').routes,
    handler: ({props, reply}) => {
      const {params, routes} = props;
      const {action} = routes[routes.length - 1];
      const store = compose()(createStore)(reducers);

      function render () {
        const app = renderToString(
          <Provider store={store}>
            <RoutingContext {...props}/>
          </Provider>
        );
        const state = JSON.stringify(store.getState());

        reply(`<!doctype html>
<html>
  <head>
    <meta charSet="utf-8"/>
    <title>Ninja</title>
    <style>
      body {
        background-color: #333;
        color: white;
        font-family: -apple-system, "Helvetica Neue", "Lucida Grande", sans-serif;
      }

      a {color: rgb(0, 216, 255)}
    </style>
  </head>
  <body>
    <main id="app">${app}</main>
    <script id="state" type="application/json">${state}</script>
    <script src="/client.js"></script>
  </body>
</html>`);
      }

      store.dispatch(update(props.location));

      if (!action) { return render(); }

      store.subscribe(render);
      store.dispatch(action(params));
    }
  },
  register
};
