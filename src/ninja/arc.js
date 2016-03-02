import React, {Component, PropTypes} from 'react';

export class Arc extends Component {
  render () {
    const {
      children,
      degrees,
      degreesStart,
      fill,
      percent,
      stroke,
      strokeLinecap,
      strokeWidth,
      width
    } = this.props;
    const center = width / 2;
    const radius = (width - strokeWidth) / 2;
    const strokeDasharray = 2 * Math.PI * radius;

    let {decimal} = this.props;
    if (degrees > 0) { decimal = degrees / 360; }
    if (percent > 0) { decimal = percent / 100; }
    if (decimal > 1) { decimal = 1; }

    const strokeDashoffset = strokeDasharray - strokeDasharray * decimal;
    const styles = {
      children: {
        alignItems: 'center',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      },
      graphic: {fill, stroke, strokeLinecap, strokeWidth, width},
      parent: {height: width, position: 'relative', width}
    };

    return (
      <div style={styles.parent}>
        <svg style={styles.graphic} viewBox={`0 0 ${width} ${width}`}>
          <circle
            cx={center}
            cy={center}
            is // Disable JSX magic attributes to support stroke-dashoffset.
            r={radius}
            stroke-dasharray={strokeDasharray}
            stroke-dashoffset={strokeDashoffset}
            stroke-width={strokeWidth}
            transform={`rotate(${degreesStart} ${center} ${center})`}/>
        </svg>
        <div style={styles.children}>{children}</div>
      </div>
    );
  }
}

Arc.defaultProps = {
  decimal: 0,
  degreesStart: -90,
  fill: 'none',
  stroke: 'black',
  strokeLinecap: 'butt',
  strokeWidth: 4,
  width: 64
};

Arc.propTypes = {
  children: PropTypes.node,
  decimal: PropTypes.number,
  degrees: PropTypes.number,
  degreesStart: PropTypes.number,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  percent: PropTypes.number,
  stroke: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number
};
