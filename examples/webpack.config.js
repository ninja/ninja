import path from 'path';
import {HotModuleReplacementPlugin, NoErrorsPlugin, optimize} from 'webpack';

const production = process.env.NODE_ENV === 'production';
const {DedupePlugin, OccurenceOrderPlugin, UglifyJsPlugin} = optimize;
const entry = {client: ['./examples/client']};
const exclude = /node_modules/;
const loaders = ['babel-loader?optional=runtime'];
const occurenceOrderPlugin = new OccurenceOrderPlugin();
const output = {
  filename: '[name].js',
  path: path.resolve(__dirname, 'build'),
  publicPath: '/'
};
const plugins = [];
const preLoaders = [];

if (production) {
  const dedupePlugin = new DedupePlugin();
  const uglifyJsPlugin = new UglifyJsPlugin();

  plugins.push(dedupePlugin, occurenceOrderPlugin, uglifyJsPlugin);
}
else {
  loaders.unshift('react-hot');

  Object.keys(entry).forEach(key => {
    entry[key].unshift('webpack-hot-middleware/client');
  });

  output.hotUpdateMainFilename = 'update/[hash]/update.json';
  output.hotUpdateChunkFilename = 'update/[hash]/[id].update.js';

  const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();
  const noErrorsPlugin = new NoErrorsPlugin();

  plugins.push(occurenceOrderPlugin, hotModuleReplacementPlugin, noErrorsPlugin);

  preLoaders.push({exclude, loader: 'eslint-loader', test: /\.js$/});
}

export default {
  cache: !production,
  debug: production,
  devtool: production ? 'eval' : null,
  entry,
  module: {
    loaders: [
      {exclude, loaders, test: /\.js$/},
      {exclude, loader: 'json-loader', test: /\.json$/}
    ]
  },
  output,
  plugins,
  resolve: {modulesDirectories: ['src', 'node_modules']}
};
