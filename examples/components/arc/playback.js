import {Arc, Icon} from 'ninja';
import React, {Component, PropTypes} from 'react';

const colorActive = 'rgb(14, 122, 254)';

export class ArcExamplePlayback extends Component {
  constructor (props) {
    super(props);

    this.state = {playing: false};
  }

  handleClick () {
    const {playing} = this.state;

    this.setState({playing: !playing});
  }

  render () {
    const {icon} = this.props;
    const {playing} = this.state;
    const boundClick = this.handleClick.bind(this);

    return (
      <div onClick={boundClick}>
        <Arc
          degreesEnd={360}
          degreesStart={0}
          lineWidth={4}
          strokeStyle={icon.color}
          width={64}>
          <Arc
            degreesEnd={playing ? 60 : -90}
            degreesStart={-90}
            lineCap="round"
            lineWidth={4}
            strokeStyle={colorActive}
            width={64}>
            <Icon graphic={playing ? 'pause' : 'play'} style={{
              fill: icon.color,
              width: 32
            }}/>
          </Arc>
        </Arc>
      </div>
    );
  }
}

ArcExamplePlayback.propTypes = {
  decimal: PropTypes.number,
  icon: PropTypes.shape({
    color: PropTypes.string.isRequired
  }),
  status: PropTypes.string
};
