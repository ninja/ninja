import {ArcExamples} from './components/arc';
import {IconExamples} from './components/icon';
import {IndexRoute, Route} from 'react-router';
import React from 'react';
import {Welcome} from './components/welcome';

export const routes = (
  <Route path="/">
    <IndexRoute component={Welcome}/>
    <Route component={ArcExamples} path="arc"/>
    <Route component={IconExamples} path="icon"/>
  </Route>
);
