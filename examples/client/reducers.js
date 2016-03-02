import {arcTypes, iconTypes} from './types';
import {assign} from 'lodash';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

function arc (state = {
  downloadPercent: 66,
  playbackDecimal: .33,
  playbackStatus: 'stopped',
  rainbowDegrees: 180
}, action) {
  const {downloadPercent, playbackDecimal, playbackStatus, rainbowDegrees} = action;

  switch (action.type) {
    case arcTypes.UPDATE_DOWNLOAD_PERCENT:
      return assign({}, state, {downloadPercent});
    case arcTypes.UPDATE_PLAYBACK_DECIMAL:
      return assign({}, state, {playbackDecimal});
    case arcTypes.UPDATE_PLAYBACK_STATUS:
      return assign({}, state, {playbackStatus});
    case arcTypes.UPDATE_RAINBOW_DEGREES:
      return assign({}, state, {rainbowDegrees});
  }

  return state;
}

function components (state = [
  {key: 'arc', name: 'Arc'},
  {key: 'icon', name: 'Icon'}
]) {
  return state;
}

function icon (state = {color: 'white'}, action) {
  if (action.type === iconTypes.UPDATE_ICON_COLOR) {
    const {color} = action;

    return assign({}, state, {color});
  }

  return state;
}

export const reducers = combineReducers({arc, components, form, icon});
