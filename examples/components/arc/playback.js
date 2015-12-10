import {Arc, IconPause, IconPlay} from 'ninja';
import React, {PropTypes} from 'react';

export function ArcExamplePlayback (props) {
  const {decimal, icon, status, toggle} = props;
  const styles = {
    icon: {fill: icon.color, width: 32},
    progress: {stroke: 'rgb(14, 122, 254)', strokeWidth: 6, width: 62},
    track: {stroke: icon.color, strokeWidth: 8, width: 64}
  };

  return (
    <div onMouseUp={toggle} onTouchEnd={toggle}>
      <Arc style={styles.track}>
        <Arc decimal={decimal} style={styles.progress}>
          {status === 'playing' ?
            <IconPause style={styles.icon}/> :
            <IconPlay style={styles.icon}/>
          }
        </Arc>
      </Arc>
    </div>
  );
}

ArcExamplePlayback.propTypes = {
  decimal: PropTypes.number,
  icon: PropTypes.shape({
    color: PropTypes.string.isRequired
  }),
  status: PropTypes.string,
  toggle: PropTypes.func
};
