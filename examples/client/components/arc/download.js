import {Arc} from 'ninja';
import React, {Component, PropTypes} from 'react';

const color = 'rgb(14, 122, 254)';
const styles = {icon: {backgroundColor: color, height: 12, width: 12}};
const width = 48;

export class ArcExampleDownload extends Component {
  render () {
    const {percent} = this.props;

    return (
      <Arc
        fill="white"
        percent={100}
        stroke={color}
        strokeWidth={3}
        width={width}>
        <Arc
          percent={percent}
          stroke={color}
          strokeWidth={8}
          width={width}>
          <div style={styles.icon}/>
        </Arc>
      </Arc>
    );
  }
}

ArcExampleDownload.propTypes = {percent: PropTypes.number};
