import {Component, PropTypes} from 'react';

export class Icon extends Component {}

Icon.defaultProps = {
  style: {
    display: 'inline-block',
    fill: 'black',
    stroke: 'none',
    strokeWidth: 0
  }
};

Icon.propTypes = {
  style: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};
