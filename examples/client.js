import NinjaContext from 'ninja-context';
import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {render} from 'react-dom';
import routes from './routes';

const {JSON, document} = global;
const app = document.getElementById('app');
const history = createHistory();
const props = {history, routes};
const state = JSON.parse(document.getElementById('state').innerHTML);

global.document.addEventListener('DOMContentLoaded', () => {
  render(<NinjaContext state={state}><Router {...props}/></NinjaContext>, app);
});
