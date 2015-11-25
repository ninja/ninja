import {UPDATE_RAINBOW_DEGREES} from '../actions';

export function rainbow (state = {degrees: 0}, action) {
  if (action.type === UPDATE_RAINBOW_DEGREES) {
    const {degrees} = action;

    return Object.assign({}, state, {degrees});
  }

  return state;
}
