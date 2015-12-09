import {Arc} from 'ninja';
import React, {PropTypes} from 'react';

const color = 'rgb(14, 122, 254)';
const width = 48;

export function ArcExampleDownload (props) {
  return (
    <Arc style={{fill: 'white', stroke: color, strokeWidth: 3, width}}>
      <Arc percent={props.percent} style={{stroke: color, strokeWidth: 8, width}}>
        <div style={{backgroundColor: color, height: 12, width: 12}}/>
      </Arc>
    </Arc>
  );
}

ArcExampleDownload.propTypes = {
  percent: PropTypes.number
};

