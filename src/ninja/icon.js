import {PropTypes} from 'react';
import {Pause} from 'ninja/graphics/pause';
import {Play} from 'ninja/graphics/play';
import {Stop} from 'ninja/graphics/stop';

const graphics = {
  pause: Pause,
  play: Play,
  stop: Stop
};

export function Icon (props) {
  const {graphic} = props;
  const style = Object.assign({}, Icon.defaultProps.style, props.style);

  return graphics[graphic].call(this, style);
}

Icon.defaultProps = {
  style: {
    display: 'inline-block',
    fill: 'black',
    stroke: 'none',
    strokeWidth: 0
  }
};

Icon.propTypes = {
  children: PropTypes.node,
  graphic: PropTypes.string,
  style: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};
