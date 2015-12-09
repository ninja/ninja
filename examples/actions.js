import {arcTypes, iconTypes} from './types';

export function updateDownloadPercent (percent) {
  return {percent, type: arcTypes.UPDATE_DOWNLOAD_PERCENT};
}

export function updateIconColor (percent) {
  return {percent, type: iconTypes.UPDATE_ICON_COLOR};
}

export function updatePlaybackDecimal (percent) {
  return {percent, type: arcTypes.UPDATE_PLAYBACK_DECIMAL};
}

export function updatePlaybackStatus (percent) {
  return {percent, type: arcTypes.UPDATE_PLAYBACK_STATUS};
}

export function updateRainbowDegrees (percent) {
  return {percent, type: arcTypes.UPDATE_RAINBOW_DEGREES};
}
