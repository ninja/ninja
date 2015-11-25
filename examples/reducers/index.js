import {combineReducers} from 'redux';
import {components} from './components';
import {download} from './download';
import {icon} from './icon';
import {location} from 'ruto';
import {playback} from './playback';
import {rainbow} from './rainbow';

export const reducers = combineReducers({
  components, download, icon, location, playback, rainbow
});
