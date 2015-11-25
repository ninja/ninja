import {assets} from './assets';
import {compiler} from './compiler';
import register from 'hapi-webpack-plugin';

export const plugin = {
  options: {
    assets,
    compiler
  },
  register
};
