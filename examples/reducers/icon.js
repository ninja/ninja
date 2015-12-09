import {iconTypes} from '../types';

export function icon (state = {color: 'white'}, action) {
  if (action.type === iconTypes.UPDATE_ICON_COLOR) {
    const {color} = action;

    return Object.assign({}, state, {color});
  }

  return state;
}
