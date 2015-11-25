import React, {Component, PropTypes} from 'react';

function getRadians (degrees) {
  return (Math.PI / 180) * degrees;
}

export class Arc extends Component {
  componentDidMount () {
    this.draw(this.refs.canvas.getContext('2d'));
  }

  componentDidUpdate () {
    const {width} = this.props;
    const context = this.refs.canvas.getContext('2d');

    context.clearRect(0, 0, width, width);

    this.draw(context);
  }

  draw (context) {
    const {
      anticlockwise,
      degreesEnd,
      degreesStart,
      fillStyle,
      lineCap,
      lineWidth,
      strokeStyle,
      width
    } = this.props;
    const center = width / 2;
    const radius = (width - lineWidth) / 2;
    const endAngle = getRadians(degreesEnd);
    const startAngle = getRadians(degreesStart);

    context.save();
    context.beginPath();
    context.arc(center, center, radius, startAngle, endAngle, anticlockwise);
    context.lineCap = lineCap;
    context.lineWidth = lineWidth;
    context.fillStyle = fillStyle;
    context.fill();
    context.strokeStyle = strokeStyle;
    context.stroke();
    context.restore();
  }

  render () {
    const {children, width} = this.props;

    return (
      <div style={{position: 'relative'}}>
        <canvas height={width} ref="canvas" width={width}/>
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
}

Arc.defaultProps = {
  anticlockwise: false,
  degreesEnd: 270,
  degreesStart: -90,
  fillStyle: 'transparent',
  lineCap: 'square',
  lineWidth: 4,
  strokeStyle: 'black',
  width: 64
};

Arc.propTypes = {
  anticlockwise: PropTypes.bool,
  canvas: PropTypes.node,
  children: PropTypes.node,
  degreesEnd: PropTypes.number,
  degreesStart: PropTypes.number,
  fillStyle: PropTypes.string,
  lineCap: PropTypes.string,
  lineWidth: PropTypes.number,
  strokeStyle: PropTypes.string,
  width: PropTypes.number
};
