import {UPDATE_DOWNLOAD_PERCENT} from '../actions';

export function download (state = {percent: 0}, action) {
  if (action.type === UPDATE_DOWNLOAD_PERCENT) {
    const {percent} = action;

    return Object.assign({}, state, {percent});
  }

  return state;
}
