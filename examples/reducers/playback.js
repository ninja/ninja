import {UPDATE_PLAYBACK_DECIMAL, UPDATE_PLAYBACK_STATUS} from '../actions';

export function playback (state = {decimal: 0, status: 'stopped'}, action) {
  if (action.type === UPDATE_PLAYBACK_DECIMAL) {
    const {decimal} = action;

    return Object.assign({}, state, {decimal});
  }

  if (action.type === UPDATE_PLAYBACK_STATUS) {
    const {status} = action;

    return Object.assign({}, state, {status});
  }

  return state;
}
