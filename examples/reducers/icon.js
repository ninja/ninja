import {iconTypes} from '../types';
import {assign} from 'lodash';

export function icon (state = {color: 'white'}, action) {
  if (action.type === iconTypes.UPDATE_ICON_COLOR) {
    const {color} = action;

    return assign({}, state, {color});
  }

  return state;
}
