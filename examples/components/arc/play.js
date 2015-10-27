import NinjaArc from 'ninja-arc';
import NinjaIcon from 'ninja-icon';
import React from 'react';

const colorActive = 'rgb(14, 122, 254)';

export default class ArcExamplePlay extends React.Component {
  constructor (props) {
    super(props);

    this.state = {playing: false};
  }

  handleClick () {
    const {playing} = this.state;

    this.setState({playing: !playing});
  }

  render () {
    const {playing} = this.state;
    const boundClick = this.handleClick.bind(this);
    const strokeWidth = 6;
    const width = 44;

    return (
      <div onClick={boundClick}>
        <NinjaArc decimal={1} style={{
          stroke: 'lightgray',
          strokeWidth,
          width
        }}>
          <NinjaArc decimal={playing ? .4 : 0} style={{
            stroke: colorActive,
            strokeWidth,
            width
          }}>
            <NinjaIcon graphic={playing ? 'pause' : 'play'} style={{width: 24}}/>
          </NinjaArc>
        </NinjaArc>
      </div>
    );
  }
}
