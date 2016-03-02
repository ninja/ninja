import {arcTypes, iconTypes} from './types';

export function updateIconColor (color) {
  return {color, type: iconTypes.UPDATE_ICON_COLOR};
}

export function updatePlaybackStatus (playbackStatus) {
  return {playbackStatus, type: arcTypes.UPDATE_PLAYBACK_STATUS};
}
