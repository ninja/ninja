import NinjaContext from 'ninja-context';
import React from 'react';
import {RoutingContext} from 'react-router';
import {Server} from 'hapi';
import Webpack from 'webpack';
import api from './api';
import {renderToString} from 'react-dom/server';
import {resolve} from 'path';
import ruto from 'ruto';
import webpackConfig from './webpack.config';
import webpackMiddleware from 'hapi-webpack-plugin';

const server = new Server();

server.connection({port: 3000});

server.register([
  {
    options: {
      cache: false,
      handler: ({params, props, reply, route}) => {
        const {action} = route.props;

        action(params)
          .then(state => {
            const app = renderToString(
              <NinjaContext state={state}>
                <RoutingContext {...props}/>
              </NinjaContext>
            );

            reply(`
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charSet="utf-8"/>
                  <title>Ninja</title>
                </head>
                <body>
                  <main id="app">${app}</main>
                  <script id="state" type="application/json">${JSON.stringify(state)}</script>
                  <script src="/client.js"></script>
                </body>
              </html
            `);
          })
          .catch(console.error);
      },
      routes: resolve(__dirname, 'routes')
    },
    register: ruto
  },
  {
    options: {
      assets: {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          chunks: false, colors: true, hash: false, version: false
        }
      },
      compiler: new Webpack(webpackConfig)
    },
    register: webpackMiddleware
  },
  api
], error => {
  if (error) { throw new Error(error); }

  server.start(() => console.log('Ninja examples:', server.info.uri));
});

