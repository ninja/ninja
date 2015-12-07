import React, {PropTypes} from 'react';
import {assign} from 'lodash';

export function Arc (props) {
  const {children, degrees, degreesStart, percent} = props;
  const style = assign({}, Arc.defaultProps.style, props.style);
  const {strokeWidth, width} = style;
  const center = width / 2;
  const r = (width - strokeWidth) / 2;
  const strokeDasharray = 2 * Math.PI * r;

  let {decimal} = props;
  if (percent > 0) { decimal = percent / 100; }
  if (degrees > 0) { decimal = degrees / 360; }

  const strokeDashoffset = strokeDasharray - strokeDasharray * decimal;

  return (
    <div style={{height: width, position: 'relative', width}}>
      <svg
        style={style}
        viewBox={`0 0 ${width} ${width}`}>
        <circle
          cx={center}
          cy={center}
          is // Disable JSX magic attributes to support stroke-dashoffset.
          r={r}
          stroke-dasharray={strokeDasharray}
          stroke-dashoffset={strokeDashoffset}
          stroke-width={strokeWidth}
          transform={`rotate(${degreesStart} ${center} ${center})`}/>
      </svg>
      <div style={{
        alignItems: 'center',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      }}>{children}</div>
    </div>
  );
}

Arc.defaultProps = {
  decimal: 1,
  degreesStart: -90,
  style: {
    fill: 'none',
    stroke: 'black',
    strokeLinecap: 'butt',
    strokeWidth: 4,
    width: 64
  }
};

Arc.propTypes = {
  children: PropTypes.node,
  decimal: PropTypes.number,
  degrees: PropTypes.number,
  degreesStart: PropTypes.number,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  style: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeLinecap: PropTypes.string,
    strokeWidth: PropTypes.number,
    width: PropTypes.number
  })
};
