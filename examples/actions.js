import {arcTypes, iconTypes} from './types';

export function updateDownloadPercent (downloadPercent) {
  return {downloadPercent, type: arcTypes.UPDATE_DOWNLOAD_PERCENT};
}

export function updateIconColor (color) {
  return {color, type: iconTypes.UPDATE_ICON_COLOR};
}

export function updatePlaybackDecimal (playbackDecimal) {
  return {playbackDecimal, type: arcTypes.UPDATE_PLAYBACK_DECIMAL};
}

export function updatePlaybackStatus (playbackStatus) {
  return {playbackStatus, type: arcTypes.UPDATE_PLAYBACK_STATUS};
}

export function updateRainbowDegrees (rainbowDegrees) {
  return {rainbowDegrees, type: arcTypes.UPDATE_RAINBOW_DEGREES};
}
