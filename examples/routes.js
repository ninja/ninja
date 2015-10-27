import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {fetchComponent, fetchIndex} from './actions';
import Arc from './components/arc';
import Icon from './components/icon';
import Index from './components';

export default (
  <Route path="/">
    <IndexRoute component={Index} props={{action: fetchIndex}}/>
    <Route component={Arc} path="/arc" props={{action: fetchComponent.bind(this, 'arc')}}/>
    <Route component={Icon} path="/icon" props={{action: fetchComponent.bind(this, 'icon')}}/>
  </Route>
);
