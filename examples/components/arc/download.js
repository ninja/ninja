import {Arc} from 'ninja';
import React from 'react';

const strokeStyle = 'rgb(14, 122, 254)';
const width = 48;

export function ArcExampleDownload () {
  return (
    <Arc
      degreesEnd={360}
      degreesStart={0}
      fillStyle="white"
      lineWidth={3}
      strokeStyle={strokeStyle}
      width={width}>
      <Arc
      degreesEnd={60}
      degreesStart={-90}
      lineWidth={6}
      strokeStyle={strokeStyle}
      width={width}>
        <div style={{
          backgroundColor: strokeStyle,
          height: 12,
          width: 12
        }}/>
      </Arc>
    </Arc>
  );
}
