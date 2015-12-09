import {Arc, IconPause, IconPlay} from 'ninja';
import React, {PropTypes} from 'react';

const colorActive = 'rgb(14, 122, 254)';

export function ArcExamplePlayback (props) {
  const {decimal, icon, status, toggle} = props;
  const styleIcon = {fill: icon.color, width: 32};

  return (
    <div onClick={toggle}>
      <Arc style={{
        stroke: icon.color,
        strokeWidth: 8,
        width: 64
      }}>
        <Arc decimal={decimal} style={{
          stroke: colorActive,
          strokeWidth: 6,
          width: 62
        }}>
          {status === 'playing' ?
            <IconPause style={styleIcon}/> :
            <IconPlay style={styleIcon}/>
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
