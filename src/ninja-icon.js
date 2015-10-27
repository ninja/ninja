import {Component, PropTypes} from 'react';
import graphics from 'ninja-graphics';

export default class NinjaIcon extends Component {
  render () {
    const {props} = this;
    const {graphic} = props;
    const style = Object.assign({}, NinjaIcon.defaultProps.style, props.style);

    return graphics[graphic](style);
  }
}

NinjaIcon.defaultProps = {
  style: {
    display: 'inline-block',
    fill: 'black',
    stroke: 'none',
    strokeWidth: 0,
    width: 32
  }
};

NinjaIcon.propTypes = {
  children: PropTypes.node,
  graphic: PropTypes.string,
  style: PropTypes.shape({
    fill: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};
