import {Arc} from 'ninja';
import React from 'react';

const color = 'rgb(14, 122, 254)';
const width = 48;

export function ArcExampleDownload () {
  return (
    <Arc style={{fill: 'white', stroke: color, strokeWidth: 3, width}}>
      <Arc percent={75} style={{stroke: color, strokeWidth: 8, width}}>
        <div style={{backgroundColor: color, height: 12, width: 12}}/>
      </Arc>
    </Arc>
  );
}
