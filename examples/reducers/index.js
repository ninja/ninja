import {combineReducers} from 'redux';
import {components} from './components';
import {arc} from './arc';
import {icon} from './icon';
import {location} from 'ruto';

export const reducers = combineReducers({arc, components, icon, location});
