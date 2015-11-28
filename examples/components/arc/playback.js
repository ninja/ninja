import {Arc, IconPause, IconPlay} from 'ninja';
import React, {Component, PropTypes} from 'react';

const colorActive = 'rgb(14, 122, 254)';

export class ArcExamplePlayback extends Component {
  constructor (props) {
    super(props);

    this.state = {playing: true};
  }

  handleClick () {
    const {playing} = this.state;

    this.setState({playing: !playing});
  }

  render () {
    const {icon} = this.props;
    const {playing} = this.state;
    const boundClick = this.handleClick.bind(this);
    const styleIcon = {fill: icon.color, width: 32};

    return (
      <Arc onClick={boundClick} style={{
        stroke: icon.color,
        strokeWidth: 8,
        width: 64
      }}>
        <Arc decimal={playing ? .33 : 0} style={{
          stroke: colorActive,
          strokeLinecap: 'round',
          strokeWidth: 6,
          width: 62
        }}>
          {playing ?
            <IconPause style={styleIcon}/> :
            <IconPlay style={styleIcon}/>
          }
        </Arc>
      </Arc>
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
