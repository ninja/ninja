import React from 'react';

const {Component, PropTypes} = React;

export default class NinjaArc extends Component {
  render () {
    const {children, degrees, percent} = this.props;
    const style = Object.assign({}, NinjaArc.defaultProps.style, this.props.style);
    const diameter = style.width;
    const center = diameter / 2;
    const radius = (diameter - style.strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;// C = 2πr

    let {decimal} = this.props;

    if (percent > 0) { decimal = percent / 100; }
    else if (degrees > 0) { decimal = degrees / 360; }

    style.strokeDashoffset = circumference - circumference * decimal;

    return (
      <svg style={{width: style.width}} viewBox={`0 0 ${diameter} ${diameter}`}>
        <foreignObject height={diameter} width={diameter}>
          <svg style={style} viewBox={`0 0 ${diameter} ${diameter}`}>
            <g transform={`rotate(-90, ${center}, ${center})`}>
              <circle cx={center} cy={center} r={radius} strokeDasharray={circumference}/>
            </g>
          </svg>
        </foreignObject>
        {children === null ? null :
          <foreignObject height={diameter} width={diameter}>
            <div style={{
              alignItems: 'center',
              display: 'flex',
              height: diameter,
              justifyContent: 'center'
            }}>
              {children}
            </div>
          </foreignObject>
        }
      </svg>
    );
  }
}

NinjaArc.defaultProps = {
  decimal: 0,
  style: {
    fill: 'none',
    stroke: 'black',
    strokeLinecap: 'round',
    strokeWidth: 4,
    transition: 'stroke 0.4s ease',
    width: 64
  }
};

NinjaArc.propTypes = {
  children: PropTypes.node,
  decimal: PropTypes.number,
  degrees: PropTypes.number,
  percent: PropTypes.number,
  style: PropTypes.shape({
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeLinecap: PropTypes.string,
    strokeWidth: PropTypes.number,
    transition: PropTypes.string,
    width: PropTypes.number
  })
};
