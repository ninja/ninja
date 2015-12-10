import {createTypes} from 'ruto';

export const arcTypes = createTypes({namespace: 'arc', types: [
  'UPDATE_DOWNLOAD_PERCENT',
  'UPDATE_PLAYBACK_DECIMAL',
  'UPDATE_PLAYBACK_STATUS',
  'UPDATE_RAINBOW_DEGREES'
]});

export const iconTypes = createTypes({namespace: 'icon', types: [
  'UPDATE_ICON_COLOR'
]});
