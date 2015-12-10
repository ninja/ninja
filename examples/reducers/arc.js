import {arcTypes} from '../types';
import {assign} from 'lodash';

export function arc (state = {
  downloadPercent: 75,
  playbackDecimal: .33,
  playbackStatus: 'stopped',
  rainbowDegrees: 180
}, action) {
  switch (action.type) {
    case arcTypes.UPDATE_DOWNLOAD_PERCENT:
      const {downloadPercent} = action;

      return assign({}, state, {downloadPercent});
    case arcTypes.UPDATE_PLAYBACK_DECIMAL:
      const {playbackDecimal} = action;

      return assign({}, state, {playbackDecimal});
    case arcTypes.UPDATE_PLAYBACK_STATUS:
      const {playbackStatus} = action;

      return assign({}, state, {playbackStatus});
    case arcTypes.UPDATE_RAINBOW_DEGREES:
      const {rainbowDegrees} = action;

      return assign({}, state, {rainbowDegrees});
  }

  return state;
}
