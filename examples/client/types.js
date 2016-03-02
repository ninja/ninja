function createTypes ({namespace, types}) {
  const objectTypes = {};

  types.forEach(type => objectTypes[type] = `@@${namespace}/${type}`);

  return objectTypes;
}

export const arcTypes = createTypes({namespace: 'arc', types: [
  'UPDATE_PLAYBACK_STATUS'
]});

export const iconTypes = createTypes({namespace: 'icon', types: [
  'UPDATE_ICON_COLOR'
]});
