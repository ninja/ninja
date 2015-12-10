import {Arc} from 'ninja';
import React, {PropTypes} from 'react';

const color = 'rgb(14, 122, 254)';
const width = 48;
const styles = {
  icon: {backgroundColor: color, height: 12, width: 12},
  progress: {stroke: color, strokeWidth: 8, width},
  track: {fill: 'white', stroke: color, strokeWidth: 3, width}
};

export function ArcExampleDownload (props) {
  return (
    <Arc style={styles.track}>
      <Arc percent={props.percent} style={styles.progress}>
        <div style={styles.icon}/>
      </Arc>
    </Arc>
  );
}

ArcExampleDownload.propTypes = {
  percent: PropTypes.number
};

