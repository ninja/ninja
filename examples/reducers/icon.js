import {UPDATE_ICON_COLOR} from '../actions';

export function icon (state = {color: 'white'}, action) {
  if (action.type === UPDATE_ICON_COLOR) {
    const {color} = action;

    return Object.assign({}, state, {color});
  }

  return state;
}
