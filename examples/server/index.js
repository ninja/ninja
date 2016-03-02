import {Server} from 'hapi';
import {assets, compiler} from './webpack';
import {createMetaMarkup} from './meta';
import {createStyleMarkup} from './style';
import register from 'hapi-webpack-plugin';

const {env} = process;
const host = env.npm_config_host || '0.0.0.0';
const port = env.npm_config_port || 3000;
const server = new Server();

server.connection({host, port});

server.register({options: {assets, compiler}, register}, error => {
  if (error) { throw error; }

  server.route({
    method: 'GET',
    path: '/{component?}',
    handler: (request, reply) => {
      const meta = createMetaMarkup({component: request.params.component});
      const style = createStyleMarkup({userAgent: request.headers['user-agent']});

      reply(`<!doctype html>
        <html>
          <head>
            ${meta}
            ${style}
          </head>
          <body>
            <main id="app"></main>
            <script src="/client.js"></script>
          </body>
        </html>
      `);
    }
  });

  server.start(() => {
    console.log(`Ninja: ${server.info.uri}`);
  });
});
