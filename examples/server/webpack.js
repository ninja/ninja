import Webpack, {HotModuleReplacementPlugin} from 'webpack';

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', './examples/client'],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        loader: 'json',
        test: /\.json$/
      }
    ]
  },
  output: {
    filename: 'client.js',
    path: __dirname,
    publicPath: '/'
  },
  plugins: [new HotModuleReplacementPlugin()],
  resolve: {modulesDirectories: ['src', 'node_modules']}
};

export const assets = {
  publicPath: config.output.publicPath,
  stats: {chunks: false, colors: true, hash: false, version: false}
};

export const compiler = new Webpack(config);
