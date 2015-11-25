import {Server} from 'hapi';
import {plugin as ruto} from './ruto';
import {plugin as webpack} from './webpack';

const {env} = process;
const host = env.npm_config_host || '0.0.0.0';
const port = env.npm_config_port || 3000;
const server = new Server();

server.connection({host, port});

server.register([ruto, webpack], error => {
  if (error) { throw error; }

  server.start(() => {
    console.log(`Ninja: ${server.info.uri}`);
  });
});
