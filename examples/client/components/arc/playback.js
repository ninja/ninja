import {Arc, IconPause, IconPlay} from 'ninja';
import React, {Component, PropTypes} from 'react';

export class ArcExamplePlayback extends Component {
  render () {
    const color = 'white';
    const {decimal, status, toggle} = this.props;
    const styles = {icon: {fill: color, width: 24}};

    return (
      <div onMouseUp={toggle} onTouchEnd={toggle}>
        <Arc decimal={1} stroke={color} strokeWidth={8} width={64}>
          <Arc decimal={decimal} stroke="rgb(14, 122, 254)" strokeWidth={6} width={62}>
            {status === 'playing' ?
              <IconPause style={styles.icon}/> :
              <IconPlay style={styles.icon}/>
            }
          </Arc>
        </Arc>
      </div>
    );
  }
}

ArcExamplePlayback.propTypes = {
  decimal: PropTypes.number,
  status: PropTypes.string,
  toggle: PropTypes.func
};
